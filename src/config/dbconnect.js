import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.j8ts33e.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster");

    return mongoose.connection;
}

export default conectaNaDatabase;