import express, { Request, Response, Express } from 'express';
import ViteExpress from 'vite-express';
import { Server } from 'socket.io';

import http from 'http';

ViteExpress.config({ mode: 'development' });

const app: Express = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
interface Mission {
        id: string;
        name: string;
        path_preview: string;
}

app.get('/missions_available', (req: Request, res: Response) => {
        const missions: Mission[] = [
                { id: "123", name: "Path A", path_preview: "TODO" },
                { id: "456", name: "Path B", path_preview: "TODO" },
                { id: "789", name: "Path C", path_preview: "TODO" }
        ];
        res.json({ missions });
});

app.post('/select_mission', (req: Request, res: Response) => {
        res.json({ status: "Mission Started" });
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

        const detections: Detection[] = [
                {
                        id: "1234",
                        location: [123, 123],
                        time: "timeUTC",
                        images: [
                                "https://www.akc.org/wp-content/uploads/2017/11/Affenpinscher-running-outdoors.jpg",
                                "https://www.akc.org/wp-content/uploads/2017/11/Affenpinschers-together-in-the-grass.jpg",
                                "https://www.akc.org/wp-content/uploads/2017/11/Affenpinscher-at-the-2016-ANC.jpg",
                                "https://www.akc.org/wp-content/uploads/2017/11/Affenpinscher-head-portrait-1.jpg"
                        ],
                },
        ];
        res.json({ detections });
});

app.post('/abort_mission', (req: Request, res: Response) => {
        res.json({ status: "success" });
});

app.post('/new_detection', (req: Request, res: Response) => {
        res.json({ status: "success" });
        console.log(req.body);
        io.emit('new_detection', req.body);
});

// ViteExpress.listen(app, PORT, () => {
//         console.log(`Server is running at http://localhost:${PORT}`);
// });

const PORT = 3000;

const server = http.createServer(app).listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
});

const URL = "http://localhost:3000";

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
        });

        // Handle disconnection
        socket.on('disconnect', () => {
                console.log('A user disconnected');
        });
});


ViteExpress.bind(app, server);