import { app } from "./app";
import { AppDataSource } from "./data-source";
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import path from "path";

AppDataSource.initialize()
    .then(async () => {
        console.log("Database connected!")

    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {

    const options = {
        swaggerDefinition: {
          openapi: "3.0.0",
          info: {
            title: "Contacts REST API",
            version: "1.0.0",
          },
          servers: [
            {
              url: "http://localhost:3000/"
            }
          ]
        },
        apis: [path.join(__dirname, './api-method-doc.ts')]
      };
      
    const specs = swaggerJsdoc(options)
    app.use("/docs",
    swaggerUi.serve)
    app.get(
        "/docs",
        swaggerUi.setup(specs, {
          explorer: true
        })
      );
        console.log(`APP is running on http://localhost:${PORT}`)
        })
    })
    .catch((err: string) => console.log(err))