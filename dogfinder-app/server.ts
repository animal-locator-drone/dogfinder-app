import express, { Request, Response, Express } from 'express';
import ViteExpress from 'vite-express';
import { Server } from 'socket.io';
import { v4 } from 'uuid';
import csv from 'csv-parser';
import fs from 'fs';
import http from 'http';
import uuid from 'uuid';
import multer from 'multer';
import axios, { AxiosResponse } from 'axios';

// Create necessary directories
fs.mkdirSync('./data', { recursive: true });
fs.mkdirSync('./output_images', { recursive: true });


// Initialize a new CSV for this session with a unique id 
const csvName: string = v4();
const csvStream = fs.createWriteStream(`./data/${csvName}.csv`);
csvStream.write('id,lat,lon,time,images\n');

ViteExpress.config({ mode: 'development' });

const app: Express = express();

// Multer setup
const storage: multer.StorageEngine = multer.diskStorage({
        destination: (req, file, cb) => {
                cb(null, './output_images/');
        },
        filename: (req, file, cb) => {
                cb(null, file.originalname);
        }
});

const upload = multer({ storage: storage });


// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes
interface Mission {
        id: string;
        name: string;
        path_preview: string;
}

app.get('/output_images/:image', (req: Request, res: Response) => {
        res.sendFile(`/home/animallocator/Documents/src/detection-service/output_images/${req.params.image}`);
});

app.get('/missions_available', async (req: Request, res: Response) => {
        axios.get('http://localhost:8000/missions_available')
        .then((response) => {
                const missions: Mission[] = response.data;
                res.json({ missions });
                return response;
        }).catch((error) => {
                console.error(error);
                res.status(500).json({ error: 'Failed to fetch missions' });
        });
});

app.post('/select_mission/:mission_id', (req: Request, res: Response) => {

        axios.post(
                'http://localhost:8000/select_mission/' + req.params.mission_id
        ).then((response) => {
                res.status(200).json({ status: 'Mission Started' });
                return response;
        }).catch((error) => {
                console.error(error);
                res.status(500).json({ error: 'Failed to fetch missions' });
        });
});

interface StatusInfo {
        battery_percent: number;
        time_elapsed: number;
        current_location: [number, number];
        time_remaining: number;
        progress_percent: number;
}

app.get('/mission_status', (req: Request, res: Response) => {
        const status_info: StatusInfo = {
                battery_percent: 69,
                time_elapsed: 200,
                current_location: [420.69, 69.420],
                time_remaining: 500,
                progress_percent: 69,
        };

        res.json({ status_info });
});

interface Detection {
        id: string;
        location: [number, number];
        time: string;
        images: string[];
}

app.get('/detections', (req: Request, res: Response) => {

        const detections: Detection[] = [];

        fs.createReadStream(`./data/${csvName}.csv`)
                .pipe(csv())
                .on('data', (row) => {
                        detections.push({
                                id: row.id,
                                location: [parseFloat(row.lat), parseFloat(row.lon)],
                                time: row.time,
                                images: row.images.split(' ')
                        });
                })
                .on('end', () => {
                        console.log('CSV file successfully processed');
                        res.json({ detections });
                });
});


app.post('/abort_mission', (req: Request, res: Response) => {
        // Make HTTP POST request to captain server
        const options = {
                hostname: '127.0.0.1', // Assuming captain server is running locally
                port: 8000, // Change port according to your captain server configuration
                path: '/abort_mission',
                method: 'POST',
        };

        const captainReq = http.request(options, (captainRes) => {
                captainRes.on('data', (data) => {
                        console.log(data.toString());
                        res.json({ status: 'success' }); // Respond to client
                });
        });

        captainReq.on('error', (error) => {
                console.error(error);
                res.status(500).json({ error: 'Failed to abort mission' }); // Handle error
        });

        captainReq.end();
});

app.post('/new_detection', (req: Request, res: Response) => {
        res.json({ status: "success" });
        console.log(req.body);
        io.emit('new_detection', req.body);

        // Write to CSV
        csvStream.write(
                `${req.body.id},${req.body.location},${req.body.time},${req.body.images.join(' ')}\n`
        );
});

app.post('/upload_image', upload.single('image'), (req: Request, res: Response) => {
        res.json({ status: "success" });
});

// ViteExpress.listen(app, PORT, () => {
//         console.log(`Server is running at http://localhost:${PORT}`);
// });

const PORT = 3000;

const HOST = '0.0.0.0'

const server = http.createServer(app).listen(PORT, HOST, () => {
        console.log(`Server is running at http://${HOST}:${PORT}`);
});

const URL = HOST + ':' + PORT;

const io = new Server(server, {
        cors: {
                origin: URL,
        }
});



// Set up event listeners
io.on('connection', (socket) => {
        console.log('A user connected');

        // Handle chat messages
        socket.on('create-something', (data) => {
                console.log('Received:', data);
                io.emit('something-created', data);

                // Write to CSV
                console.log(data);
                csvStream.write(`${data.id},${data.location.join(' ')},${data.time},${data.images.join(' ')}\n`);
        });

        // Handle disconnection
        socket.on('disconnect', () => {
                console.log('A user disconnected');
        });
});






// Bind Vite to Express
ViteExpress.bind(app, server);
