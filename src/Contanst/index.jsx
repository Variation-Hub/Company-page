import { v4 as uuidv4 } from 'uuid';

export const CardData = [
    {
        id: uuidv4(),
        title: "Web Application",
        img: "/public/website-development.jpg",
        alt: "Web application",
        content: "Elevate your online presence with our cutting-edge web application services. We design responsive, user-friendly interfaces that seamlessly integrate with the latest technologies. Experience enhanced functionality, scalability, and a visually appealing digital platform that engages and captivates your audience."
    },
    {
        id: uuidv4(),
        title: "IoT Application",
        img: "/public/IoT-development.jpg",
        alt: "IoT application",
        content: "Embrace the future with our comprehensive IoT services. We empower your business by connecting devices, extracting valuable insights, and optimizing processes. From smart homes to industrial solutions, our IoT expertise ensures seamless connectivity, real-time data analysis, and innovative solutions to propel your business forward."
    },
    {
        id: uuidv4(),
        title: "Mobile Application",
        img: "/public/mobile-application.png",
        alt: "mobile application",
        content: "Revolutionize your reach with our mobile application services. We craft intuitive, high-performance apps that resonate with your audience. Whether iOS or Android, our mobile solutions blend aesthetics with functionality, providing a delightful user experience. Stay ahead in the mobile landscape, harnessing the power of innovation for your business success."
    }
]