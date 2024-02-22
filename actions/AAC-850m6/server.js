async function(properties, context) {
    
    const remoteFileUrl = properties.fileurlremote; // Replace with the URL of the remote file
    const signedUploadUrl = properties.uploadurlsigned; // Replace with your actual signed upload URL

    try {
        // Step 1: Download the file from the remote URL
        const response = await fetch(remoteFileUrl);
        if (!response.ok) {
            throw new Error('Failed to download file');
        }
        const blob = await response.blob(); // Get the downloaded file as a Blob

        // Step 2: Upload the downloaded file
        const uploadResponse = await fetch(signedUploadUrl, {
            method: 'PUT',
            body: blob,
        });
        if (!uploadResponse.ok) {
            throw new Error('Upload failed');
        }
        return {answer: 200};
    } catch (error) {
        return {answer: 400};
    }
}