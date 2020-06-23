const images = []

for (let i = 1000; i < 1050; i++) {
    images.push({
        id: i,
        src: `https://picsum.photos/id/${i}/480/480`,
        alt: `Image ${i}`,
    })
}

export default images
