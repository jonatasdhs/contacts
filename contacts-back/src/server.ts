import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(async () => {
        console.log("Database connected!")

    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`APP is running on http://localhost:${PORT}`)
        })
    })
    .catch((err: string) => console.log(err))