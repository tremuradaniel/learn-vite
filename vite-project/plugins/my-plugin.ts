export default function myPlugin() {
    return {
        name: 'my-plugin',
        // this function will run on every file that Vite comes across when it's build the app
        transform(src: any, id: string) {
            // id = name of the file being processed
            if (id.substring(id.length - 4) === '.svg') {
                // act only on .svg files
                console.log('Found a svg file!');
                console.log(src);
            }
        }
    }
}