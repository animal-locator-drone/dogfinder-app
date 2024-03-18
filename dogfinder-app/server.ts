import express, { Request, Response } from 'express';
import ViteExpress from 'vite-express';

ViteExpress.config({mode: 'development'});

const app = express();
const PORT = 3000;

// Set the view engine to ejs
// app.set('view engine', 'ejs');
// app.set('views', './templates');

// Serve static files from the "static" directory
// app.use('/static', express.static('static'));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
// app.get('/', (req: Request, res: Response) => {
//     res.render('index', { request: req });
// });

app.get('/missions_available', (req: Request, res: Response) => {
    res.json({
        missions: [
            { id: "123", name: "Path A", path_preview: "TODO" }
        ]
    });
});

app.post('/select_mission', (req: Request, res: Response) => {
    res.json({ status: "Mission Started" });
});

app.get('/mission_status', (req: Request, res: Response) => {
    res.json({
        status_info: {
            battery_percent: 69,
            time_elapsed: 200,
            current_location: [420.69, 69.420],
            time_remaining: 500,
            progress_percent: 69,
        }
    });
});

app.get('/detections', (req: Request, res: Response) => {
    res.json({
        detections: [
            {
                id: "1234",
                location: [123, 123],
                time: "timeUTC",
                images: [
                    "www.link.to/image.png",
                    "www.link.to/another_image.png"
                ],
            }
        ]
    });
});

app.post('/abort_mission', (req: Request, res: Response) => {
    res.json({ status: "success" });
});

// Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

ViteExpress.listen(app, PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
});