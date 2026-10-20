import domtoimage from 'dom-to-image';

export async function saveImageAsync(imageRef: any) {
  try {
    const dataUrl = await domtoimage.toJpeg(imageRef.current, {
      quality: 0.95,
      width: 320,
      height: 440,
    });

    let link = document.createElement('a');
    link.download = 'sticker-smash.jpeg';
    link.href = dataUrl;
    link.click();
  } catch (e) {
    console.log(e);
  }
}
