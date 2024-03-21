import express, { Request, Response } from 'express';
import { getSystemErrorMap } from 'util';
import ViteExpress from 'vite-express';
import { Server } from 'socket.io';

import { createServer } from 'http';




ViteExpress.config({ mode: 'development' });

const app = express();
const PORT = 3000;

const httpServer = createServer(app);



// initialize socket.io

const io = new Server(httpServer, {
        cors: {
                origin: "http://localhost:3000",
                methods: ["GET", "POST"]
        }
});

io.attach(3001);

// handle socket.io connections
io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
                console.log('user disconnected');
        });
});

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
                                "https://www.w3schools.com/w3images/lights.jpg",
                                "https://www.w3schools.com/w3images/nature.jpg",
                                "https://www.w3schools.com/w3images/mountains.jpg",
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

ViteExpress.listen(app, PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
});
