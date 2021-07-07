// HTML Elements
const filterEl = document.getElementById('filters');
const pictureSpaceEl = document.querySelector('#picture-space');
const fileUploadIconEl = document.getElementById('uplaod-icon');
const fileInputEl = document.querySelector('#file-pic');

const fileReader = new FileReader();

// configuration
const expectedFileMimeType = ['image/jpeg', 'image/png'];

// Initialize the color picker
const colorPicker = new iro.ColorPicker("#color-picker", { width: 150 });

// Event Listeners

// picture space element is click on open the file input dailog box
pictureSpaceEl.addEventListener('click', () => {
    // triggers a click event which causes the file upload dialog box to show
    fileInputEl.click();
})

// When the color picker changes color change the background color of the picture space element
colorPicker.on('color:change', function(color) {
    // Change the background color of the picture space element 
    pictureSpaceEl.style.backgroundColor = color.hexString;
 });

 // When the file input has a picture file use it as background image
fileInputEl.addEventListener('change', () => {
    // Get the first file selected
    const [file] = fileInputEl.files;

    // Make sure that it's a valid file and valid file type
    if (!file || !file instanceof File || expectedFileMimeType.indexOf(file.type) < 0) {
        return;
    }
    // load the file into the file reader
    fileReader.readAsDataURL(file);
});

 // When the file reader loads the image use it to set the background image 
fileReader.onload = () => {    
    console.log(fileReader.result);
    // set the picture space background image 
    pictureSpaceEl.style.backgroundImage = `url('${fileReader.result}')`;
    // hide the upload icon
    fileUploadIconEl.style.display = 'none';
}

// When the filter changes change the color
filterEl.addEventListener('change', () => {
    pictureSpaceEl.style.backgroundBlendMode = filterEl.value;
});
        