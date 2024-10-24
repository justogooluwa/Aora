import { Client, Account, ID } from 'react-native-appwrite';
export const config = {
    endpoint:"https://cloud.appwrite.io/v1",
    platform:"com.ogooluwa.aora",
    projectId:"6715099a001d2e35ee8b",
    databaseId:"671516fe000a67e96506",
    userCollectionId:"67151743002906c56977",
    videoCollectionId:"671517930032c479eb26",
    storageId:"67151a360009824d9c74"
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.


    const account = new Account(client);

   export const createUser = ()=>{
        account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    }


