const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwrteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwrteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwrteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwrteBucketId: String(import.meta.env.VITE_BUCKET_ID),
}

export default conf