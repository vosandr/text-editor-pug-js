const openFile = document.getElementById('openfile');
const saveFile = document.getElementById('savefile');
const contentTextArea = document.getElementById('content');
let fileHandle;


const open = async () => {
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    contentTextArea.value = contents;
}
//https://translated.turbopages.org/proxy_u/en-ru.ru.c69596aa-642ff5db-786f398b-74722d776562/https/www.geeksforgeeks.org/simple-text-editor-using-file-system-access-api/
const save = async content => {
    try {
        const handle = await window.showSaveFilePicker({
            types: [
                {
                    accept: {
                        'text/plain': ['.txt'],
                    },
                },
            ],
        })
        // Create a FileSystemWritableFileStream to write
        const writable = await handle.createWritable();
        // Write the contents of the file to the stream
        await writable.write(content);
        // Close the file and write the contents to disk
        await writable.close();
        return handle;
    } catch (err) {
        console.error(err.name);
    }
}


openFile.addEventListener('click', () => open());
saveFile.addEventListener('click', 
    () => save(contentTextArea.value));