    import { Client, Account, Avatars, Databases } from "react-native-appwrite";

    const client = new Client();

    client
        .setEndpoint('https://fra.cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
        .setProject('68477918000edef9adb3') // Replace with your Project ID
        .setPlatform('dev.gl.demoapp'); // Replace with your app's bundle ID/package name

    export const account = new Account(client);
    export const avatars = new Avatars(client);
    export const databases = new Databases(client);
