"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";

// --- Type Definitions ---

interface BulletItem {
  title: string;
  desc: string;
}

interface ImageGridItem {
  img: string;
  width?: string;
  height?: string;
}

interface ColumnItem {
  heading: string;
  text: string;
}

interface ContentItem {
  type: "text" | "image" | "grid" | "list" | "columns" | "image-grid" | "bullet-list" | "video";
  heading?: string;
  subheading?: string;
  smallHeading?: string; // New: For tags or tiny titles
  imageGridData?: ImageGridItem[]; // Array for the two images
  text?: string;
  columnData?: ColumnItem[]; // Array for the 2-column text grid
  points?: string[]; // Array for the tick marks
  bulletListData?: BulletItem[];
  img?: string;
  imgdesc?: string;
  width?: string;
  height?: string;
  mt?: string; // New property for Margin Top
  mb?: string;
  gap?: string;
  reverse?: boolean; // If true, image on left, text on right
  videoUrl?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

interface Project {
  num: string;
  title: string;
  img: string;
  width?: string;  // Added for main hero
  height?: string; // Added for main hero
  content: ContentItem[];
}

interface Industry {
  slug: string;
  title: string;
  projects: Project[];
}

// --- Data ---

const pageData: Industry[] = [
  {
    slug: "metaverse-gaming",
    title: "Metaverse and Gaming",
    projects: [
      {
        num: "01",
        title: "Digital Twin of Dubai",
        img: "/dubai2.jpg",
        width: "1150px", // Custom main image size
        height: "850px",
        content: [
          { 
            type: "text", 
            heading: "Digital Twin of Dubai: The Next Phase of the AI Revolution", 
            text: "BzAnalytics has accomplished an incredible feat in digital technology by creating a virtual replica of Dubai, known as the Digital Twin of Dubai. BzAnalytics has transformed how users explore and learn about the iconic city by leveraging cutting-edge technology and innovative ideas. Let's delve deeper into the project and see how BzAnalytics turned data into immersive experiences." 
          },
          { 
            type: "text", 
            subheading: "Objective: Replicating the Real-World Dubai", 
            text: "The Dubai Government desired a virtual environment to simulate real-world Dubai for immersive exploration and interaction. BzAnalytics accepted the challenge and created the Digital Twin of Dubai to provide users with an authentic and visually stunning experience." 
          },
          { 
            type: "text", 
            subheading: "Realistic Representation of Dubai", 
            text: "BzAnalytics has meticulously recreated Dubai's iconic landmarks, infrastructure, and cityscape in virtual reality. Users can explore the city in detail and learn about Dubai's rich culture and heritage. The realistic representation was achieved through advanced technologies, which made the virtual environment nearly identical to the real-world city." 
          },
          { 
            type: "text", 
            subheading: "Interactive Elements with the Monoverse and Decentraland", 
            text: "BzAnalytics used the capabilities of Monoverse and Decentraland to incorporate interactive elements into Dubai's Digital Twin. Users can learn about the city by taking virtual tours, accessing historical information, and integrating real-time data. The interactive elements provide users a complete experience while making the virtual environment more engaging and informative." 
          },
          { 
            type: "text", 
            subheading: "Community Engagement", 
            text: "BzAnalytics has created a thriving virtual community within the Digital Twin of Dubai. Users can interact, socialize, and collaborate to improve their knowledge of the city. The platform enables virtual events, conferences, and exhibitions, increasing user engagement and knowledge sharing." 
          },
          { 
            type: "image", 
            img: "/dubai3.jpg", 
            width: "950px", 
            height: "703px" // Specific inner image size
          }, 
          { 
            type: "text", 
            imgdesc: "Discover BzAnalytics' groundbreaking achievement with the Digital Twin of Dubai. Immerse yourself in an unparalleled digital experience in which data is brought to life most realistically. With interactive elements and community engagement, the project has already established a new standard for virtual environments. This innovative project has created limitless possibilities for technological advancement and paved the way for future digital transformation. Join us on this incredible journey to discover the limitless potential of data and technology!" 
          },
        ]
      },
      { 
        num: "02", 
        title: "BzNFTMart", 
        img: "/bzmart-dt.jpg",
        content: [
          { 
            type: "text", 
            heading: "Promoting Decentralization: BzNFTMart's Peer-to-Peer Marketplace for NFTs", 
            text: "The introduction of blockchain technology has dramatically impacted the gaming industry. BzNFTMart is a new decentralized marketplace that intends to capitalize on this trend by providing a secure and user-friendly platform for gamers, developers, and collectors to exchange non-fungible tokens (NFTs) associated with their favourite games. Here, we look into the technical architecture of BzNFTMart, highlighting its essential features and benefits." 
          },
          { 
            type: "text", 
            subheading: "1.BzNFTMart Architecture", 
            text: "BzNFTMart is built with Next.js, Solidity, and Node.js, three powerful technologies that work together to create a reliable, scalable, and secure platform. Let's take a closer look at each of these technologies." 
          },
          { 
            type: "image", 
            img: "/bzmart1.png", 
            width: "1170px", 
            height: "617px",
            mt:"90px",
            mb:"80px"
          }, 
          { 
            type: "text", 
            smallHeading: "1.1 Front-end Development with Next.js:", 
            text: "Next.js, a React framework, is used for the front-end development of BzNFTMart. It provides server-side rendering, static site generation, and seamless client-side navigation, resulting in quick and dynamic user experiences. The Next.js design allows for seamless connectivity with the back-end and real-time updates to NFT listings, bids, and transactions." 
          },
          { 
            type: "text", 
            smallHeading: "1.2 Smart Contract Development with Solidity:", 
            text: "Solidity, the programming language for Ethereum-based smart contracts, is crucial to the BzNFTMart ecosystem. Smart contracts specify the behaviour and logic of NFTs, such as ownership, transfers, and royalties. Solidity enables secure and transparent transactions, promoting confidence and immutability in the marketplace." 
          },
          { 
            type: "image", 
            img: "/bzmart2.png", 
            width: "1150px", 
            height: "642px",
            mb:"70px"
          },
          { 
            type: "text", 
            smallHeading: "1.3 Back-end Development with Node.js:", 
            text: "BzNFTMart's back-end work will be done using Node.js. It offers a scalable and efficient server-side environment for user authentication, API integrations, database interfaces, and transaction processing. Node.js' event-driven architecture enables excellent performance and real-time changes, resulting in seamless user experiences." 
          },
          { 
            type: "text", 
            subheading: "2. Key Features of BzNFTMart", 
          },
          { 
            type: "image", 
            img: "/bzmart3.png", 
            width: "1170px", 
            height: "773px",
          },
          { 
            type: "text", 
            imgdesc: "BzNFTMart offers several key features, making it a unique and valuable platform for gamers, developers, and collectors." 
          },
          { 
            type: "text", 
            smallHeading: "2.1 User-Friendly Interface:", 
            text: "BzNFTMart provides a simple and user-friendly interface that allows gamers and collectors to effortlessly navigate the marketplace, examine NFTs, and make deals. The Next.js framework offers a responsive and engaging user experience across multiple devices." 
          },
          { 
            type: "text", 
            smallHeading: "2.2 Secure Transactions:", 
            text: "BzNFTMart ensures secure transactions by utilizing Solidity and blockchain technologies. Smart contracts make NFT ownership transfers clear, irreversible, and tamper-proof, reducing the danger of fraud and offering a trustworthy platform for users." 
          },
          { 
            type: "image", 
            img: "/bzmart4.png", 
            width: "1150px", 
            height: "668px",
            mb:"60px"
          },
          { 
            type: "text", 
            smallHeading: "2.3 Instant Bidding and Trading:", 
            text: "BzNFTMart enables real-time bidding and trading of NFTs, allowing users to make new offers or accept current ones. Node.js enables rapid communication between users and the marketplace, resulting in quick updates and seamless transactions." 
          },
          { 
            type: "text", 
            smallHeading: "2.4 Community Features:", 
            text: "BzNFTMart understands the value of community participation and provides tools such as user profiles, social sharing, and comments. Users can communicate with one another, discuss NFTs, and develop a thriving community on the site." 
          },
          { 
            type: "image", 
            img: "/bzmart5.png", 
            width: "1150px", 
            height: "667px",
            mb:"80px"
          },
          { 
            type: "text", 
            subheading: "3. Benefits of BzNFTMart", 
            text:"BzNFTMart brings several benefits to the gaming community, including:",
          },
          { 
            type: "text", 
            smallHeading: "3.1 Empowering Game Developers:", 
            text: "BzNFTMart empowers game developers by providing a platform to monetize their creations by selling NFTs. It opens new revenue streams and incentivizes the development of unique and engaging gaming experiences. 3.2 Enriching Gaming Experience:" 
          },
          { 
            type: "text", 
            text: "By integrating NFTs into gaming, BzNFTMart enhances the player experience by allowing users to own, trade, and showcase in-game assets. This ownership fosters a sense of rarity, exclusivity, and personalization, enriching the overall gaming experience." 
          },
          { 
            type: "text", 
            smallHeading: "3.3 Promoting Decentralization:", 
            text: "BzNFTMart embraces the decentralized nature of blockchain technology, removing intermediaries and creating a peer-to-peer marketplace. It empowers gamers, creators, and collectors by giving them direct control over their assets and transactions." 
          },
          { 
            type: "image", 
            img: "/bzmart6.png", 
            width: "1150px", 
            height: "753px",
            mt:"70px",
            mb:"40px"
          },
          { 
            type: "text", 
            text: "Take the plunge into the world of decentralized gaming today! Connect with us to become a valued member of BzNFTMart and access a secure and easy-to-use platform that brings together gamers, developers, and collectors in an immersive and lucrative ecosystem. With Next.js, Solidity, and Node.js powering our platform, you can count on a seamless and efficient experience. Don't hesitate - reach out to us now and be a part of the groundbreaking BzNFTMart platform that is changing the game for the NFT marketplace." 
          },
        ]
      },
      { 
        num: "03", 
        title: "Minecraft Game", 
        img: "/minecraft-dt.jpg",
        content: [
          { 
            type: "text", 
            heading: "The Future of Learning with Minecraft", 
            text: "Minecraft is a popular sandbox game where players can explore a blocky, procedurally generated 3D world and build anything imaginable. With no set goals or objectives, players can build, mine, craft, and explore at their leisure. Since its release in 2009, the Minecraft game has gained a massive following, and its open-ended nature has allowed for limitless possibilities and creativity." 
          },
          { 
            type: "text", 
            text: "BzAnalytics recognizes Minecraft's potential as a learning and development tool. Our company specializes in using the game to teach a wide range of skills, including coding and programming, as well as teamwork and problem-solving. We believe Minecraft is more than just a game; it is a platform for promoting learning and growth." 
          },
          { 
            type: "text", 
            heading: "Objective: Gamify the Minecraft Experience for Education", 
            text: "The client, an educational institution, wanted to gamify the Minecraft experience. Minecraft in education is to encourage interactive and educational gameplay. BzAnalytics delivered by our data science and technology expertise with the popular Minecraft universe to create a unique gaming experience that appeals to players and demonstrates their adaptability across multiple platforms." 
          },
          { 
            type: "image", 
            img: "/minecraft-1.jpg", 
            width: "1021px", 
            height: "567",
            mt:"90px",
            mb:"80px"
          }, 
          { 
            type: "text", 
            subheading: "Customized Game Modes: Tailored to Specific Educational Objectives", 
            text: "BzAnalytics used 3.js and Babylon.js to create custom Minecraft game modes that were tailored to specific educational goals. These game modes made interactive learning enviroment possible while preserving the familiar and beloved Minecraft environment." 
          },
          { 
            type: "text", 
            subheading: "Immersive Learning Environments: Incorporating Educational Content, Quizzes, and Challenges", 
            text: "To further enhance student engagement and facilitate active learning, BzAnalytics designed immersive virtual learning environments within Minecraft that incorporated educational content, quizzes, and challenges. This Minecraft new update made learning fun and exciting for students, which in turn improved their retention of the material." 
          },
          { 
            type: "text", 
            subheading: "Collaboration and Multiplayer: Promoting Teamwork, Communication, and Critical Thinking Skills", 
            text: "BzAnalytics implemented multiplayer and collaborative features that allowed students to collaborate on projects, solve puzzles, and explore virtual learning environments; this promoted teamwork, communication, and critical thinking abilities, all of which are required for success in any educational or professional setting." 
          },
          { 
            type: "image", 
            img: "/minecraft-2.png", 
            width: "901px", 
            height: "601px",
            mt:"80px",
            mb:"120px"
          },
          { 
            type: "text", 
            text: "BzAnalytics has revolutionized the Minecraft experience with its gamified and interactive platform. Our learning platform is highly interactive, engaging, and educational, and we have infused it with cutting-edge technology and data science to deliver customized solutions that are tailored to your unique requirements. By joining us, you will be a part of an innovative approach to education that is changing the future of learning for generations to come." 
          },
        ]
      },
      { 
        num: "04", 
        title: "Treasure Hunt Game", 
        img: "/hunt-dt.jpg",
        content: [
          { 
            type: "text", 
            heading: "Treasure Hunt Game: Unleashing the Quest for Hidden Riches", 
            text: "BzAnalytics is a cutting-edge technology company that has ventured into gaming, creating an exhilarating treasure hunt experience that requires players to navigate virtual worlds, solve puzzles, and discover hidden treasures. The project demonstrates BzAnalytics' versatility by seamlessly incorporating gamification principles into virtual environments to create exciting adventures. The objective of this project was to engage visitors through an exciting treasure hunt experience in a virtual environment." 
          },
          { 
            type: "text", 
            subheading: "Objective", 
            text: "The primary objective of BzAnalytics' treasure hunt game was to engage visitors through an exciting treasure hunt experience in a virtual environment. The game was designed for the tourism and hospitality industry to provide an immersive and engaging experience to our visitors." 
          },
          { 
            type: "text", 
            subheading: "High-Resolution Visuals for Immersive Experience", 
            text: "To create a visually stunning and immersive experience, BzAnalytics used high-resolution 3.js graphics to create detailed virtual landscapes for the treasure hunt game. The immersive visuals enhanced the sense of adventure and excitement for participants. BzAnalytics recognizes the value of high-quality visuals in engaging players and making the game more appealing to an audience." 
          },
          { 
            type: "image", 
            img: "/treasure1.jpg", 
            width: "800px", 
            height: "500",
            mb:"30px"
          }, 
          { 
            type: "text", 
            subheading: "Challenging Puzzles and Quests for Engagement", 
            text: "The success of any treasure hunt game depends on its intricate puzzles and quests, which require players to explore the virtual environment, solve riddles, and overcome obstacles to discover hidden treasures. BzAnalytics created challenging puzzles and quests that required participants to use their problem-solving skills. The engaging gameplay kept participants interested and motivated to find out the secrets of the virtual world." 
          },
          { 
            type: "text", 
            subheading: "Real-Time Leaderboards for Competition and Participation", 
            text: "To foster healthy competition among participants, BzAnalytics implemented real-time leaderboards that tracked participants’ progress and scores. This feature drove engagement and encouraged repeat participation, making the game more competitive and exciting. Real-time leaderboards also provide a sense of achievement to the players and increase their motivation to play the game again." 
          },
          { 
            type: "image", 
            img: "/treasure2.jpg", 
            width: "1169px", 
            height: "374",
            mb:"30px"
          },
          { 
            type: "text", 
            text: "Treasure Hunt is an exciting game that is gaining widespread popularity in the gaming industry. The game involves players searching for hidden treasures by solving puzzles and clues. With its immersive gameplay, Treasure Hunt offers an engaging and thrilling experience for players. BzAnalytics has recognized the potential of this game and has invested in its development. Join us and experience the thrill of the Treasure Hunt game, which promises to be a game-changer in the gaming industry. Get ready to embark on a treasure hunt like never before!" 
          },
        ]
      },
      { 
        num: "05", 
        title: "Virtual Hub", 
        img: "/virtual-Land-dt.jpg",
        content: [
          { 
            type: "text", 
            heading: "Create Your Ultimate Virtual Space with BzAnalytics' Innovative Virtual Hub", 
            text: "Welcome to the world of Virtual Hubs! You can build your virtual land with a range of amenities in this virtual world, including shops, entertainment halls, and restaurants, all meticulously designed to provide users with an authentic, engaging, and enjoyable experience. BzAnalytics, in collaboration with platforms like Monoverse and Decentraland, has created a virtual land that offers users an authentic, engaging, and enjoyable experience." 
          },
          { 
            type: "text", 
            heading: "Objective", 
            text: "BzAnalytics developed a highly immersive and customizable virtual land with multiplayer functionality for a real estate development company. The project's objective was to create a virtual land with shops, entertainment halls, restaurants, and virtual office spaces to offer users an immersive and engaging experience." 
          },
          { 
            type: "text", 
            heading: "Immersive Environments - Using Unity to Create a 3D world", 
            text: "BzAnalytics has developed highly immersive 3D environments for various establishments within the Virtual Hub. Unity is a popular game engine and powerful tool that allows developers to build complex 3D worlds with ease. BzAnalytics has leveraged this technology to create a virtual world that looks and feels like the real world. The attention to detail is impeccable, and users can enjoy a lifelike shopping, dining, or working experience within the Virtual Hub." 
          },
          { 
            type: "text", 
            heading: "Multiplayer Functionality- Real-time Interaction with Other Users", 
            text: "BzAnalytics has integrated multiplayer functionality into the Virtual Hub. This feature enables users to interact in real-time, facilitating virtual socializing, networking, and collaboration within the virtual land. Users can interact with others, explore the virtual world together, and share their experiences. Multiplayer functionality has enhanced the Virtual Hub's user engagement and interaction." 
          },
          { 
            type: "text", 
            heading: "Customization Options - Personalizing Virtual Office Spaces", 
            text: "BzAnalytics has added customization options for virtual office spaces in the Virtual Hub. Businesses can personalize their virtual workspaces to establish a consistent brand presence. Users can customize and decorate their offices to match their real-world counterparts, instilling a sense of ownership and identity. Customization options have made the Virtual Hub a more tailored experience for businesses and users." 
          },
          { 
            type: "image", 
            img: "/virtual1.jpg", 
            width: "1170px", 
            height: "780",
          }, 
          { 
            type: "text", 
            text: "The future of virtual experiences lies with Virtual Hubs. At BzAnalytics, we are committed to helping you design your own unique online space that offers endless possibilities for networking, socializing, and conducting business. With our expertise and cutting-edge technology, we make it easy for you to bring your virtual world to life. Join us today and let's work together to create a virtual hub that is tailored to your specific needs and exceeds your expectations." 
          },
        ]
      },
      { 
        num: "06", 
        title: "Augmented Reality", 
        img: "/aureality-dt.jpg",
        content: [
          { 
            type: "text", 
            heading: "BzAnalytics: Pioneering the Future of AR and Speech Recognition", 
            text: "Augmented Reality (AR) is a rapidly developing technology. It is a method of augmenting our world by overlaying it with digital information. With the advancement of voice recognition technology, we are bringing voice recognition and augmented Reality closer together. Here, we will discuss how BzAnalytics combined the technologies of AR, Automatic Speech Recognition (ASR), and Text-to-Speech Synthesis (TTS) to create a new system that can take the narrator's speech and convert it into readable text and display it directly on AR display." 
          },
          { 
            type: "text", 
            subheading: "Augmented Reality and Voice Recognition - The Best of Both Worlds", 
            text: "Augmented Reality is a technology that has been around for a long time but has only recently been integrated with voice recognition. This revolutionary system is taking the world by storm and altering how we engage with technology. We are opening up new possibilities by merging augmented reality and speech recognition. In this system, we translate voice to text using ASR and TTS and display it on AR displays. This approach applies to various disciplines, including education, entertainment, and gaming." 
          },
          { 
            type: "text", 
            subheading: "The Benefits of Using AR and Voice Recognition", 
            text: "The advantages of utilizing AR and speech recognition together are numerous. First, it enables us to provide customers with a more intuitive and engaging experience; this is especially valuable in the retail business, as buyers can use AR to perceive things in real time and have a better understanding of what they are purchasing. Second, it can help firms communicate with their customers more intelligently. Businesses can deliver a more personalized experience to their clients by incorporating the system as an assistant in portable communication devices." 
          },
          { 
            type: "text", 
            subheading: "Improving Accuracy with Audio-Visual Speech Recognition (AVSR)", 
            text: "We use Audio-Visual Speech Recognition (AVSR) to enhance system accuracy as a backup to the ASR engine in noisy conditions; this ensures that the system is always precise and trustworthy, regardless of the noise level in the environment." 
          },
          { 
            type: "text", 
            subheading: "Scope", 
            text: "The scope of this technology is enormous. We can design augmented reality apps with a distinct system architecture for speech recognition. AR-based shopping assistants are frequently employed by clothing and other companies. This technology enables us to link brands and consumers intelligently. We can also use the system as an assistant in portable devices for communication." 
          },
          
          { 
            type: "text", 
            text: "The combination of ASR, TTS, and AR has brought us closer to a future in which technology is effortlessly incorporated into our lives. With the advancement of this system, we can anticipate more inventive AR applications in the future. BzAnalytics is continually looking for new methods to incorporate cutting-edge technologies into our products and services to provide the finest solutions for our clients." 
          },
        ]
      },
    ]
  },
  {
    slug: "energy",
    title: "Energy And Manufacturing",
    projects: [
      { 
        num: "01", 
        title: "Inventory Analytics", 
        img: "/inventory.jpg",
        content: [
          { type: "text", heading: "INVENTORY DATA ANALYTICS", text: "Inventory data is a gold mine for information based on which organisations can make critical business decisions. The available data can often be quite huge and it has to be formatted and presented in a way decision makers can make sense of it. This is where data analysis comes into play. Data analysis essentially extracts useful insights into customer behaviour, product movement and other important indicators from the vast amount of data." },
          {
           type: "grid",
           smallHeading: "Elementary Analysis",
           text: "An elementary analysis on the data itself can reveal a lot of useful information about sales trends and customer behaviour. The above plot shows the profit margins from top selling products of the company over the years. Rice, Sugar and Edible oil remain the top three grossers. Products like home care, packaged foods etc are starting to contribute more in 2020 mainly due to people being confined to their homes during the pandemic.",
           img: "/inv1.png",
           reverse: false // Text left, Image right
          },
  {
    type: "grid",
    text: "The two plots here,reveal a very interesting story. The first plot shows the sales trend and margins over the last couple of years. the sales and margin have been steadily increasing until March 2020 after which there is a significant dip in sales. The dip in sales coincides with the start of country wide lock down in India due to the Corvid-19 pandemic situation. But the story doesn’t end there.",
    img: "/inv2.png",
    reverse: true // Image left, Text right
  },
  {
    type: "grid",
    text: "The second chart reveals that the sales of rice has gone down during the lockdown period. Rice is one thing that people would like to stock during uncertain periods like these, but still its sales has dropped, why? The reason for this cannot be found with the data that we have in hand. A closer look at other sources brings to light the fact that government has issued free ration of rice to all the people of the state during lockdown and it has impacted the sales figures of rice. This also highlights the need to correlate other sources like new articles with the data to bring out facts we otherwise would miss.",
    img: "/inv3.png",
    reverse: false // Text left, Image right
  },
  {
    type: "list",
    heading: "Suggested Action Points",
    points: [
      "To overcome the sales dip due to lockdown, the company should give more focus on products that showing growing customer interest like homeware, packaged food etc",
      "The company should gather information from news and other external sources to forecast trends and initiate strategies to counter changes."
    ],
    mb: "80px"
  },
         { 
            type: "text", 
            subheading: "Recency, Frequency, Monetary Value Analysis", 
            text: "RFM analysis provides many details about customer behaviour and it facilitates targeted action for different kinds of customers. RFM analysis is build around a customer’s recency of purchase (R), frequency of purchase (F)and gross monetary value of his purchases (M). Based on the values of R. F and M customers can be divided into different classes and a separate set of actions can be advised for each of these classes." 
          },
          { 
            type: "text", 
            text: "The below figure shows the customers based on RFM analysis on the sales data." 
          },
          { 
            type: "image", 
            img: "/inv4.png", 
            width: "888px", 
            height: "569px" // Specific inner image size
          },
          {
    type: "columns",
    columnData: [
      { heading: "Champions", text: "These are the best customers and they have purchased recently, purchases very frequently and spends a lot of money on their purchases. It is very important to hold on to champion customers through extension of gifts, exclusive offers or other means. In this particular case only 22% of the customers are champions and the company needs to find ways not only in retaining these customers but also to bring more customers as champions." },
      { heading: "Hibernating", text: "Hibernating customers are those customers who were champions or loyals but has not purchased recently. If not properly attended the company very soon loose those customers.Factors that lead to hibernate must be eliminated by taking extra note on this categories. 23% of the customers are currently hibernating and the company needs to pay urgent attention." },
      { heading: "Loyals", text: "Loyal customers purchase very frequently and if given proper attention could be converted into champions. Here 10% of the customers are loyal." },
      { heading: "At Risk", text: "These are customers the company has almost lost. Attemp can be made to bring them back." },
      { heading: "Lost", text: "These are the customers company has already lost. There is no point in investing too much into these customers but they can make an attempt to bring them back." },
      { heading: "Potential Loyals", text: "With proper attention they could become loyal and later champions. 10% of the customers are potential loyal." }

    ],
    mt: "80px"
  },
  {
    type: "list",
    heading: "Suggested Action Points",
    points: [
      "Around 44% of the customers belong to either champions, loyal or potential loyal customers. It is important for the company to make sure that these 44% remain as customers.",
      "It is also important to bring back the 23% hibernating customers which could make a potential 67% champion/loyal customers."
    ],
    mb: "80px"
  },
  { 
     type: "text", 
     subheading: "Technology road-map", 
     text: "Data analytics can reveal a lot of hidden information about the business and can lead to action plans for more efficient practices in the future. Besides these insights and action plans we also advice a detailed technology road map which would let the company execute the action plans in the most productive manner. Technology road map include the execution of the following tools." 
          },
          {
    type: "columns",
    columnData: [
      { heading: "Logistic management tool", text: "The company could make use of a logistic management tool which would save them cost and improve customer satisfaction. This tool would automate all the logistic tasks and at the same time will make them more efficient. The tool would optimise routing and clustering of transport vehicles, sort and allocate shipments, track fleets and ensures timely delivery of goods to customers" },
      { heading: "Direct selling through WhatsApp", text: "The company follows a B2B model and this meant that they were even more heavily effected by the lockdown. But they could find opportunity in this crisis by a shift to B2C model through direct selling. They already have the infra and logistics and all they need is a platform. Direct selling through WhatsApp is the best possible scenario for the company as it is easy to implement and most convenient for the customers." },
      { heading: "Recommendation system", text: "The RFM analysis and market-basket analysis would provide a Highly effective Recommendation system and good insights into customer behaviour. These inputs, with the help of an automated recommendation system, could help to suggest new products and offers for the customers depending on their class of purchase history. This would help the company in customer retention and upgradation. With the aid of srong recommendation system implementation champion customers could be rewarded. The loyal/potential loyal customers then could become champions and lost/almost lost customers could be brought back into the fold." },
      { heading: "NLP to correlate external sources", text: "Sales trends can be largely influenced by many external factors like pandemics, political scenarios, clarities and weather. It is important for business to keep track of these external influences and proactively react to them. Using NLP techniques, news articles can be regularly analysed to extract useful information about upcoming events that could have an impact on the sales. This information would then help the decision makers to come up with solutions even before the event would have an impact on their business. For example previously we have seen how government's free ration scheme has impacted rice sales. With NLP, the company could have made preparations to minimise its impact on their sales." },
      { heading: "Anticipating issues beforehand", text: "ML can help ERP systems anticipate problems before they occur. Such advance preparation is only possible with ERP software that uses artificial Intelligence.ERP Systems with Al will be able to demand forecast,avoiding wastage of resources and preventing shutdowns as well." },

    ],
    mt: "85px"
  },
        ]
      },
      { 
        num: "02", 
        title: "Scraping Tool", 
        img: "/scrapingtool.jpg",
        content: [
          { type: "text", heading: "Simplify Your Web Scraping Process with BzAnalytics' Tool", text: "Data is more important in making informed decisions in today's world. However, data collection is a time-consuming and tedious task; this is where web scraping comes in. Web scraping is the method of obtaining data from web pages. It is a quick and easy approach to getting information from several websites and applying it to make informed decisions." },
          { 
            type: "text", 
            text: "BzAnalytics offers web scraping services. Our web scraping tool is intended to make the web scraping process simple and effective. We will discuss how our web scraping tool works and its use cases here." 
          },
          { 
            type: "text",
            subheading:"How BzAnalytics' Web Scraping Tool Works", 
            text: "Our web scraping program starts by generating an HTTP request to retrieve resources from a specific website. Once the targeted website successfully receives and processes the request, the desired resource is retrieved and returned to the web scraping program. After downloading the online data, the extraction process proceeds by parsing, reformatting, and systematically organizing the data." 
          },
          { 
            type: "text",
            text: "We use Scrapy, a Python-based reusable web crawling framework. It accelerates the process of developing and growing massive crawling programs. It also includes a web-based shell that simulates human website viewing patterns. The retrieved data is then exported in JSON format." 
          },
          {
    type: "list",
    heading: "Use Cases of BzAnalytics' Web Scraping Tool",
    points: [
      "Contact scraping can extract contact information from websites such as email addresses, phone numbers, and social media handles.",
      "Price change monitoring/comparison can monitor and compare prices of products from e-commerce websites.",
      "Product review collection can extract product reviews and ratings from various websites.",
      "Weather data monitoring can extract real-time weather data from weather websites.",
      "Website change detection can monitor and detect changes to a website's content and structure.",
      "Web data integration can integrate data from different websites to create a comprehensive dataset for analysis."
    ],
  },
            { 
            type: "image", 
            img: "/scrp.png", 
            width: "1150", 
            height: "646" // Specific inner image size
          },
          { 
            type: "text", 
            imgdesc: "Web scraping is an effective technology for gathering information from various websites. BzAnalytics offers a web scraping solution that is intended to make the scrapping process simple and quick. It can extract dynamic data in real-time and track website updates. With BzAnalytics' web scraping technology, you can save time and make more informed decisions. Contact BzAnalytics to learn more about our web scraping services." 
          },
          
        ]
      }
    ]
  },
  {
    slug: "sdg",
    title: "SDG",
    projects: [
      { 
        num: "01", 
        title: "Water Management", 
        img: "/water.jpg",
        content: [
          { type: "text", heading: "Transforming Water Management in Agriculture and Turf Industry with AI-Powered Irrigation Scheduler System", text: "Water management is a critical component of agriculture and turf management. With growing concerns about the long-term use of natural resources, businesses must implement innovative solutions to reduce water consumption and promote responsible water management practices. One such solution is an AI-powered irrigation scheduler system, which uses IoT sensors and AI algorithms to optimize water usage in agriculture and turf management." },
         { 
            type: "text", 
            subheading: "The Challenge: Advanced Water Management in Agriculture and Turf Industry", 
            text: "Green Solutions, a leading agriculture and turf management solution provider, faced the challenge of effectively managing water resources in the agriculture and turf industry. They required a solution to accurately estimate water requirements based on weather conditions, soil moisture levels, and crop or turf characteristics. The solution would allow them to schedule irrigation cycles intelligently, reduce water waste, and improve overall water management practices." 
          },
          { 
            type: "image", 
            img: "/water-3.png", 
            width: "800", 
            height: "534px",
            mt:"80px",
            mb:"20px"
          },
        { type: "text", heading: "The Solution: AI-Powered Irrigation Scheduler System by BzAnalytics", text: "Green Solutions collaborated with BzAnalytics, a well-known software company specializing in IoT and AI, to meet the challenge. BzAnalytics created an advanced irrigation scheduler system that used weather and soil sensors and AI models to schedule watering and calculate the optimal amount of water required." },

  { 
     type: "text", 
     text: "The system offered several key features, such as an IoT sensor network, AI-based models for scheduling and water amount calculation, and real-time monitoring and control." 
          },
          { 
            type: "text", 
            subheading: "IoT Sensor Network:", 
            text: "Deployed weather and soil sensors across fields and turf areas to collect real-time data on temperature, humidity, rainfall, and soil moisture levels." 
          },
          { 
            type: "text", 
            subheading: "AI-Based Models for Scheduling and Water Amount Calculation:", 
            text: "Developed advanced AI models based on interpolation techniques to analyze sensor data and determine precise irrigation schedules and water amounts required for crops and turf areas." 
          },
          { 
            type: "text", 
            subheading: "Monitoring and Control:", 
            text: "Enabled real-time monitoring of sensor data through a centralized dashboard, allowing farmers and turf managers to track soil moisture levels, weather conditions, and irrigation cycles." 
          },
          { 
            type: "image", 
            img: "/water-2.jpg", 
            width: "960", 
            height: "500px",
            mt:"60px",
          },
          { type: "text", heading: "Key benefits of the system"},
          { 
            type: "text", 
            subheading: "Water Conservation:", 
            text: "The implementation of the AI-powered irrigation scheduler system led to significant water conservation for Green Solutions. By scheduling watering based on real-time data and accurately calculating water amounts, water waste was minimized, and overall water consumption was reduced." 
          },
          { 
            type: "text", 
            subheading: "Cost Savings:", 
            text: "Green Solutions experienced substantial cost savings as a result of the optimized irrigation practices. The reduction in water spending positively impacted their financial bottom line." 
          },
          { 
            type: "text", 
            subheading: "Improved Crop and Turf Health:", 
            text: "The precise scheduling and water amount calculation based on AI models contributed to healthier crops and turf areas, resulting in improved growth, increased yield, and enhanced aesthetics." 
          },
          { 
            type: "text", 
            subheading: "Environmental Sustainability:", 
            text: "Green Solutions showcased its commitment to environmental sustainability by implementing an advanced irrigation system that minimized water usage and promoted responsible water management practices." 
          },
          { 
            type: "text", 
            text: "BzAnalytics, an IoT and AI specialist, collaborated with Green Solutions to revolutionize water management in agriculture and turf industries. Using IoT sensors, AI models, and real-time analytics, Green Solutions achieved significant water conservation, cost savings, and improved crop and turf health. At BzAnalytics, we remain committed to developing cutting-edge software solutions that optimize resource utilization and drive sustainable practices across various industries. Contact us today to see how we can help your business achieve its full potential." 
          },

        ]
      },
    ]
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    projects: [
      { 
        num: "01", 
        title: "AI Medical Imaging", 
        img: "/medical.jpg",
        content: [
          { type: "text", heading: "Transforming Healthcare with AI-Assisted Medical Imaging: A Game-Changer in Diagnostics", text: "The medical industry has long relied on manual analysis, which is time-consuming and susceptible to human error. However, as technology advances, more medical companies are adopting computer vision technology to improve diagnostic accuracy and streamline medical imaging workflows. BzAnalytics, a software company specializing in computer vision and AI, has created an innovative AI-based video tracking and detection system to improve diagnostic accuracy and streamline medical imaging workflows." },
         { 
            type: "text", 
            subheading: "Challenge and Solution", 
            text: "The client needed to accurately track and detect critical features in medical imaging videos, such as tumors or abnormalities. Manual analysis was time-consuming and susceptible to human error. They required a comprehensive computer vision solution capable of achieving exceptional video tracking and detection accuracy, allowing healthcare professionals to make precise diagnoses." 
          },
          { 
            type: "text", 
            text: "BzAnalytics developed an advanced video tracking and detection system over two years using hand-engineering techniques and cutting-edge AI models such as PyFaster R-CNN and YOLO. These techniques aimed to automate detecting and tracking critical features in medical imaging videos, providing healthcare professionals with precise diagnostic data." 
          },
          { 
            type: "text", 
            subheading: "Data Collection and Annotation", 
            text: "BzAnalytics worked closely with the client to curate a diverse dataset of medical imaging videos covering various medical conditions and anomalies. The team used expert annotations to train AI models for accurate video tracking and detection." 
          },
          { 
            type: "text", 
            subheading: "AI Model Development", 
            text: "BzAnalytics used deep learning algorithms and computer vision techniques to train AI models that can accurately track and detect key features. They combined the PyFaster R-CNN and YOLO models to achieve high precision and real-time performance." 
          },
          { 
            type: "text", 
            subheading: "Enhanced Diagnostic Capabilities:", 
            text: "BzAnalytics developed a user-friendly interface that allowed healthcare professionals to visualize and interact with the AI-generated video analysis results. The system provided automatic tracking and detection of tumors or abnormalities, empowering doctors with accurate diagnostic information and facilitating treatment planning." 
          },
          { 
            type: "image", 
            img: "/medical-1.png", 
            width: "1024", 
            height: "576px",
          },
          { 
            type: "text", 
            subheading: "Results and Impact", 
            text: "The AI-based video tracking and detection system achieved an outstanding accuracy rate of 99.98%, surpassing manual analysis methods and improving diagnostic precision. By automating video analysis, the system reduced the time required for healthcare professionals to review and interpret medical imaging videos, streamlining diagnostic workflows. The system enabled earlier and more accurate detection of critical features, leading to timely interventions, improved treatment planning, and better patient outcomes." 
          },
          { 
            type: "text", 
            subheading: "EHR Medical Data Segmentation and Analysis", 
            text: "BzAnalytics also implemented NLP techniques for EHR (Electronic Health Record) medical data segmentation and fast analysis. This further streamlined the process of extracting relevant information from medical records, enabling faster insights and informed decision-making for healthcare providers." 
          },
          { 
            type: "image", 
            img: "/medical-2.jpg", 
            width: "739", 
            height: "415",
            mb:"60px",
          },
          { 
            type: "text", 
            text: "AI Medical Imaging is a game-changer in the healthcare industry, providing advanced imaging solutions that aid in better diagnosis and treatment of diseases. At BzAnalytics, we are leading the way in AI Medical Imaging innovation, providing cutting-edge solutions that help healthcare providers improve the accuracy and speed of medical imaging analysis. With our AI-powered medical imaging solutions, medical professionals can detect even the smallest anomalies that may not have been visible with traditional methods. By partnering with BzAnalytics, healthcare providers can take advantage of the latest advancements in AI technology to provide better care and improve patient outcomes." 
          },
        ]
      },
      { 
        num: "02", 
        title: "Diagnostic Deep Learning", 
        img: "/medi2.jpg",
        content: [
          { type: "text", heading: "Medical image analysis using deep learning algorithms", text: "Diagnostic deep learning (DDL) is a rapidly growing field in the world of artificial intelligence (AI) that has the potential to transform the healthcare industry. It involves the use of complex algorithms and neural networks to process medical data and make accurate diagnoses. By using DDL, healthcare providers can identify diseases at an early stage, predict treatment outcomes, and develop personalized treatment plans. BzAnalytics, a leading AI-based healthcare solutions provider, is at the forefront of this technology, offering cutting-edge DDL services to healthcare organizations around the world." },
          { type: "text", heading: "Maximizing the Power of Deep Learning in Computer Vision", text: "BzAnalytics is committed to excellence in Deep Learning, particularly Computer Vision. Our AI-powered object detection workflow, which uses deep learning network-trained models for object localization, can solve problems in medical image tracking and disease diagnosis." },
          { type: "text", heading: "Using PyFasterRCNN Algorithm for Object Tracking System", text: "Our team has extensive experience in research and development, and we successfully trained an object-tracking system using the PyFasterRCNN algorithm. Our solutions rely on cutting-edge Artificial Intelligence/Machine Learning image analytics to achieve high accuracy and speed, outperforming traditional manual analysis in various scenarios where medical imaging plays an essential role in diagnosis." },
          { type: "text", heading: "BzAnalytics: Providing Accurate and Faster Results for Medical Imaging", text: "BzAnalytics understands that accurate and timely diagnosis is critical for better patient outcomes. That is why our AI-powered systems provide more insights and interpretations than traditional and manual analysis, with the highest accuracy and speed in medical image tracking and disease diagnosis, utilizing the most recent advances in deep learning technology." },
          { 
            type: "image", 
            img: "/med.png", 
            width: "564", 
            height: "523px",
          },
        ]
      },
      { 
        num: "03", 
        title: "Medical Data Analytics", 
        img: "/medi3.jpg",
        content: [
          { type: "text", heading: "Power Up Your Patient Care with Medical Data Analytics", text: "Medical data analytics is a powerful tool for improving patient care, advancing medical research, and lowering healthcare costs. BzAnalytics provides comprehensive data analytics services to healthcare organizations, research institutions, and medical practitioners. Our experienced team collaborates closely with clients to understand their needs and develop tailored plans utilising cutting-edge statistical tools and processes to convert complex medical information into practical knowledge." },
          { type: "text", heading: "Enhancing Patient Treatment and Outcomes", text: "Medical data analytics has the potential to improve patient care significantly. Healthcare professionals can identify patterns and tendencies that may take some time to notice by analyzing large amounts of patient data. We assist our clients in utilizing their medical data to enhance patient care through various methods. For example, we can analyze patient information to identify at-risk individuals and design customized interventions to halt or control chronic conditions. We can also use machine learning algorithms to predict patient outcomes and identify the best treatment options for individual patients. We guarantee our clients exceptional results in patient care." },
          { type: "text", heading: "Fuelling Innovation in the Healthcare Sector", text: "Medical data analytics is key to driving innovation in the healthcare sector. Researchers can detect novel treatments, procedures, and diagnostic tools to improve patient outcomes while lowering healthcare costs by extracting data from scientific trials and other exploration studies. We use powerful analytics tools to identify patterns and trends in large datasets and work closely with our clients to create custom solutions that meet their needs." },
          { 
            type: "image", 
            img: "/med-analytics1.jpg", 
            width: "1000px", 
            height: "569px",
          },
          { type: "text", heading: "Reducing Healthcare Costs", text: "Medical data analytics has the potential to reduce healthcare costs significantly. At BzAnalytics, we assist our clients in scrutinizing their medical data to identify areas where costs can be reduced without compromising patient care quality. We guarantee that our clients will achieve exceptional results in terms of healthcare cost savings." },
          { type: "text", heading: "Deep Learning Algorithm", text: "Our deep learning algorithm is a game-changer in the medical data analytics field. It can extract patient information from their medical report and read all the text before analyzing it using NLP to find vital data about their medical condition. We guarantee our clients exceptional results with our deep learning algorithm." },
          { 
            type: "image", 
            img: "/med-analytics2.jpg", 
            width: "1140px", 
            height: "653px",
          },
          {
            type:"text",
            imgdesc:"Are you ready to take your healthcare organization to the next level? BzAnalytics provides comprehensive data analytics services to healthcare organizations, research institutions, and medical practitioners. Our experienced team collaborates closely with clients to understand their needs and develop tailored plans utilizing cutting-edge statistical tools and processes to convert complex medical information into practical knowledge. Join us to discover how we can help your organization achieve exceptional results in the healthcare industry."
          }
        ]
      },
    ]
  },
    {
    slug: "textile",
    title: "Textile",
    projects: [
      { 
        num: "01", 
        title: "AI Stylist", 
        img: "/aistyle.jpg",
        content: [
          { type: "text", heading: "Bz Analytics' AI Stylist: Your Personalized Fashion Advisor for the Digital Age", text: "The introduction of AI-powered stylists has transformed the fashion industry significantly. One such innovative solution is the AI stylist by BzAnalytics. The virtual fashion advisor uses artificial intelligence (AI), machine learning, and computer vision to provide personalized recommendations, style guidance, and creative solutions to enhance the fashion experience." },
         { 
            type: "text", 
            text: "Here, we'll look at the various capabilities of AI stylists and how they've transformed the fashion industry." 
          },
          { 
            type: "text", 
            heading: "Personalized Recommendations", 
            text: "One of the AI stylist's key features is its ability to provide personalized outfit recommendations based on user preferences, previous purchases, and fashion trends. The AI stylist curates a customized selection of apparel, accessories, and shoes that reflect the user's sense of style and individuality." 
          },
          { 
            type: "text", 
            subheading: "Digital Closet Maintenance", 
            text: "Consumers can input their current wardrobe items into the AI stylist, integrated with virtual wardrobe management capabilities. It can mix and match suggested pieces with wardrobe staples to create cohesive outfits. This sustainable strategy promotes thoughtful and responsible consumption while best using previously owned wardrobe components." 
          },
          { 
            type: "text", 
            subheading: "Occasion-Based Styling", 
            text: "The AI stylist understands that clothing requirements vary depending on the event. It tailors its recommendations to the specific needs of each situation, whether it's business casual for work, elegant attire for special occasions, or casual wear for everyday activities." 
          },
          { 
            type: "text", 
            subheading: "Analysis of Trends and Forecasting", 
            text: "The primary skill of an AI stylist is staying up to date on fashion trends. It constantly analyzes trends from influencers, fashion shows, and social media to ensure its recommendations reflect the most recent trends. This tool allows users to stay fashionable and try out the latest trends." 
          },
          { 
            type: "image", 
            img: "/style1.jpg", 
            width: "686", 
            height: "386px",
            mb:"30px"
          },
          { 
            type: "text", 
            text: "Are you looking to elevate your fashion game? Look no further than the AI stylist from Bz Analytics. We've transformed how people approach fashion by providing personalized recommendations, style education, and cutting-edge technology. Our tailored and technologically advanced approach to personal style will give you the confidence and creativity you need to keep up with the ever-changing fashion industry. Don't settle for less: join the revolution and elevate your style with the AI stylist today!" 
          },
          {
  type: "image-grid",
  imageGridData: [
    { img: "/ecom1.png", width: "564px", height: "1004px" },
    { img: "/ecom2.png", width: "564px", height: "1004px" }
  ],
  gap: "40px",
  mb: "60px"
}
        ]
      },
    ]
  },
  {
    slug: "corporate",
    title: "Corporate",
    projects: [
      { 
        num: "01", 
        title: "Store Analytics", 
        img: "/store.jpg",
        content: [
          { type: "text", heading: "STORE ANALYTICS: IMPROVING STORE EFFICIENCY THROUGH BzANALYTICS’ FACE DETECTION TECHNOLOGY", text: "In today's digital age, technology has transformed how businesses operate, and face detection technology is a prime example of such innovation. It is a reliable method of authenticating and identifying individuals. Combined with high-quality cameras, it can be a game changer for retailers. BzAnalytics, a leading provider of store analytics solutions, has created a portfolio that enables store admins to analyze their store's activities using face detection technology." },
          { type: "text", heading: "Importance of Store Analytics", text: "The retail industry is highly competitive, and store administrators must constantly analyze their operations to make informed decisions. Store analytics allows them to monitor footfall patterns and customer demographics and optimize their store layout to improve efficiency. BzAnalytics' store analytics solution offers a bird's-eye view of the store, allowing admins to monitor every corner of it." },
          { type: "text", heading: "How Does Face Recognition Work?", text: "BzAnalytics' face recognition application detects and searches for faces using the Openface algorithm and a Siamese network. The face detection API returns facial features like coordinates, gender, age, face quality, blur, and head pose. The face token/ID of detected faces is saved in a Face++ server collection, which is then used to find matches with newly discovered faces via the search API. The application marks a significant advancement in facial analysis technology." },
          { type: "text", heading: "Features of BzAnalytics' Store Analytics Solution", text: "BzAnalytics' store analytics solution uses images captured by IP cameras placed at various locations in a store. Face detection is done for each captured image, and face comparison is done for detected faces to assign an identity to the face. Some of the main features of the application are:" },
          {
           type: "bullet-list",
           bulletListData: [
            { title: "Store view", desc: "gives the administrators a bird's-eye view of the store, allowing them to monitor every corner." },
            { title: "Total pedestrian count values", desc: "tracks the number of pedestrians who enter and exit the store, allowing admins to understand footfall patterns." },
            { title: "Customer and employee heat map", desc: "generates a store heat map, displaying where customers/employees spend the most time and allowing admins to optimize store layout." },
            { title: "Average visitors per day, week, and month ", desc: "provides data on the average number of visitors to the store, allowing admins to plan staffing accordingly." },
            { title: "Gender and age-", desc: "wise counts collects data on the gender and age of customers, allowing admins to understand their customer base better." },
            { title: "Holiday/busiest time customer count and trend comparison", desc: "collects data on the busiest times in the store, allowing admins to plan promotions and discounts accordingly." },
            
          ],
  mt: "60px",
  mb: "50px"
},
{ 
            type: "image", 
            img: "/store1.jpg", 
            width: "640", 
            height: "360px",
            mb:"30px"
          },
                   { 
            type: "text", 
            text: "With high-quality cameras and face detection technology, stores can take the first step towards a more efficient future with BzAnalytics' store analytics solution. The application can help store admins optimize their store layout, plan promotions, and improve overall store efficiency by providing data and insights. If you're looking to enhance your store's performance, investing in BzAnalytics' store analytics solution can be a great idea." 
          },
        ]
      },
      { 
        num: "02", 
        title: "BZ Tool", 
        img: "/bztool.jpg",
        content: [
          { type: "text", heading: "Unlock Your Business's Potential with BzTool: The Comprehensive Software Solution for Growth", text: "In today's fast-paced business world, it's essential to streamline your processes and maximize your return on investment (ROI). BzTool is the solution you need to achieve these goals. The cutting-edge software from BzTool automates your most important organizational tasks and gives you all the tools you need to run your business more smoothly." },
          { 
            type: "image", 
            img: "/bztool1.jpg", 
            width: "859", 
            height: "567px",
            mb:"30px"
          },
          { 
            type: "text", 
            text: "Here, we'll explore some of the key features and benefits of BzTool that can help take your business to the next level." 
          },
          { type: "text", heading: "Automate and Simplify Your HR Process", text: "Managing your HR tasks, such as onboarding new employees and keeping track of their data and documents, is easy with BzTool. Using BzTool to automate your HR tasks saves you time, ensures they are done correctly, and follows all the rules." },
          { type: "text", heading: "Payroll", text: "BzTool simplifies your payroll process by automating calculations, deductions, and tax filings. With BzTool, you'll never have to worry about payroll errors or compliance issues again." },
          { type: "text", heading: "Time & Attendance", text: "BzTool makes it easy to keep track of who is working and when they are working. With its easy-to-use interface, BzTool lets you keep track of employees' schedules and make sure that payroll is done correctly." },
          { type: "text", heading: "Task Management", text: "BzTool has a powerful task management feature that allows you to assign tasks, track progress, and set deadlines. BzTool will ensure you never miss a deadline or forget an important task again." },
          { type: "text", heading: "Asset Management", text: "The BzTool lets you track and manage your business's assets, from equipment to vehicles. With BzTool, you'll always know where your assets are and when they need maintenance or repairs." },
          { type: "text", heading: "Manage Your Projects", text: "BzTool includes a project management feature that enables you to oversee your projects from planning to execution. BzTool will allow you to complete projects on time and within budget." },
          { type: "text", heading: "Track Your Working Time & Shifts", text: "BzTool tracks your working hours and shifts from start to finish. BzTool allows you to manage employee schedules and ensure accurate payroll calculations." },
          { type: "text", heading: "Improve Productivity", text: "The BzTool is intended to boost productivity by automating core business processes ranging from HR to project management. BzTool allows you to streamline your operations and focus on growing your business." },
          { 
            type: "image", 
            img: "/bztool2.png", 
            width: "1169", 
            height: "538px",
            mb:"30px"
          },
          { 
            type: "text", 
            text: "Transform your business with BzTool, the ultimate software solution. Automate HR processes, manage projects and boost productivity. Join us now and streamline your operations, maximize your ROI, and simplify your work. Take your business to the next level with BzTool - the solution that you can't afford to miss." 
          },
        ]
      },
    ]
  },
  {
    slug: "advertising",
    title: "Advertising",
    projects: [
      { 
        num: "01", 
        title: "Synergy in Web Design", 
        img: "/web.jpg",
        content: [
          { type: "text", heading: "Synergy in Web Design: Harnessing the Power of Webflow and WordPress WooCommerce for Your Website", text: "In today's digital environment, the website is the focal point of an online business. It is customers' first point of contact, and its design is essential in leaving a lasting impression. A smooth synergy between many technologies and platforms is required to design a robust and effective website. Webflow and WordPress WooCommerce are two of the most flexible and popular solutions in this field." },
          { 
            type: "text", 
            text: "Here, we'll go over how you can use these platforms to develop a website that looks great and works flawlessly." 
          },
          { type: "text", heading: "Webflow: The Ultimate Website Builder for Design Enthusiasts", text: "Webflow is a website builder that helps you construct responsive websites quickly and effortlessly. Designers can easily build visually attractive and mobile-friendly designs because of its straightforward drag-and-drop interface. Let's look at the advantages of using Webflow on your website." },
          { 
            type: "text", 
            subheading: "Responsive Design:", 
            text: "Webflow enables you to develop responsive websites that look fantastic on any device; this is essential because most people access the internet via mobile devices." 
          },
          { 
            type: "text", 
            subheading: "Customization:", 
            text: "Webflow offers various customization possibilities, allowing you to create unique and highly specialized web experiences. This adaptability is critical for organizations hoping to differentiate in a crowded online environment." 
          },
          { 
            type: "text", 
            subheading: "Hosting and Maintenance:", 
            text: "Webflow provides secure and high-speed hosting solutions. Furthermore, it handles maintenance and upgrades, easing the technical strain on website owners." 
          },
         { type: "text", heading: "WordPress WooCommerce: The Ultimate E-commerce Platform", text: "WordPress is a widely used content management system (CMS) that drives a large section of the internet. When paired with WooCommerce, it creates a robust e-commerce solution. WooCommerce provides a variety of capabilities for online stores, including product management, checkout choices, and payment methods. Let's look at the advantages of using WordPress WooCommerce on your website." },
         { 
            type: "text", 
            subheading: "E-commerce Powerhouse:", 
            text: "WooCommerce is a powerful e-commerce platform that offers the framework for product listings, shopping carts, and secure transactions." 
          },
          { 
            type: "text", 
            subheading: "Content Management:", 
            text: "WordPress is an excellent content management system. It enables you to easily create and organize material, making it great for firms looking to incorporate blogging and content marketing into their strategy." 
          },
          { 
            type: "text", 
            subheading: "Extensive Plugin Ecosystem:", 
            text: "WordPress has a large ecosystem of plugins and extensions, making it simple to add more functionality to your website. WooCommerce provides several plugins to help you improve your online store." 
          },
          { type: "text", heading: "Harnessing the Synergy:",},
          { 
            type: "text", 
            subheading: "Integration:", 
            text: "Integration is the key to maximizing the synergy between Webflow and WordPress WooCommerce. You can create your website in Webflow using its strong design tools and responsive features. Then, export the HTML and CSS code and incorporate it into your WordPress site." 
          },
          { 
            type: "text", 
            subheading: "E-commerce Integration:", 
            text: "Use WordPress WooCommerce to power your online business. It provides the infrastructure for product listings, shopping carts, and secure transactions; this enables you to combine the design flexibility of Webflow with the e-commerce capabilities of WooCommerce." 
          },
          { 
            type: "text", 
            subheading: "Content and Blogging:", 
            text: "Use WordPress to manage your website's content, blogs, and non-e-commerce features. Its easy-to-use content production tools and SEO features can help your website perform better." 
          },
          { 
            type: "text", 
            subheading: "SEO and Performance:", 
            text: "Both platforms provide tools to increase SEO and website performance. Combining these characteristics will ensure that your website performs effectively in search engines and provides an outstanding user experience." 
          },
          { 
            type: "text", 
            subheading: "Scalability:", 
            text: "Because of the flexibility of Webflow and WordPress, you can quickly scale your website as your business grows by adding additional goods, content, and features." 
          },
          { 
            type: "text", 
            text: "Harnessing the power of Webflow and WordPress WooCommerce can result in a seamless and dynamic web design and e-commerce solution. By efficiently integrating these platforms, you can create a website that looks great and works flawlessly, offering an excellent user experience and generating online business success. So, if you want to create a website that stands out in today's crowded digital landscape, consider using Webflow and WordPress WooCommerce, and don't forget to contact BzAnalytics, a leading web design and development company that can help you build a powerful and effective website." 
          },
        ]
      },
    ]
  },
  {
    slug: "psu",
    title: "PSU",
    projects: [
      { 
        num: "01", 
        title: "AI Cognitive Services", 
        img: "/feedback.jpg",
        content: [
          { type: "text", heading: "AI COGNITIVE SERVICE: Transforming Customer Feedback into Product Enhancements", text: "Client satisfaction is crucial to success and growth in today's corporate environment. To analyze customer satisfaction levels effectively, businesses require advanced analytics tools that can automate the process, deliver actionable insights, and drive improvements to the overall customer experience." },
          { 
            type: "text", 
            text: "Here, we will explore how a prominent government department based in the MENA (Middle East and North Africa) region partnered with BzAnalytics, a leading software company specializing in AI and data analytics, to transform customer feedback into product enhancements." 
          },
          { 
            type: "text", 
            subheading: "Challenge", 
            text: "The government department confronted the difficulty of reliably measuring customer satisfaction levels in real-time throughout its extensive client base. Traditional methods could have been more time-consuming and effective at capturing client sentiment. They required an advanced analytics system to automate the process, give actionable insights, and improve their overall customer experience." 
          },
          { 
            type: "text", 
            subheading: "Solution:", 
            text: "BzAnalytics developed a cutting-edge solution that uses Azure cognitive services and Power BI data analytics to create a method for calculating customer happiness index. The system was designed to extract essential insights and provide a real-time happiness index by analyzing consumer feedback from numerous touchpoints such as surveys, social media, and customer care conversations." 
          },
          { 
            type: "text", 
            subheading: "Key Features and Benefits", 
          },
         { 
            type: "text", 
            subheading: "Azure Cognitive Services Integration", 
            text: "BzAnalytics used the Azure Text Analytics API to extract sentiments from client input, which included social media posts, emails, and surveys. They also used Azure Language Understanding (LUIS) to understand client intent and identify significant topics and themes from unstructured data. They also used Azure Speech-to-Text API for sentiment analysis of recorded customer calls, improving the accuracy of the happiness index calculation." 
          },
          { 
            type: "text", 
            subheading: "Data Analytics Power BI Dashboard", 
            text: "BzAnalytics created a unique Power BI dashboard to visualize and evaluate the real-time customer happiness index. We created interactive visualizations such as sentiment trend charts, customer feedback word clouds, and top sentiment drivers to provide actionable data for decision-makers." 
          },
          { 
            type: "text", 
            subheading: "Automated Alert System", 
            text: "BzAnalytics set up an automated alarm system to notify key stakeholders when the customer happiness index diverged from established thresholds; this enabled proactive responses to key events, such as handling consumer complaints or finding areas for improvement." 
          },
          { 
            type: "text", 
            subheading: "Improved Decision-makingIntegration:", 
            text: "The Power BI dashboard helped several departments to make data-driven decisions that improved the entire customer experience, resulting in greater customer happiness and loyalty." 
          },
          { 
            type: "text", 
            text: "Take your organization's customer experience to the next level by partnering with BzAnalytics today! Our advanced analytics and AI capabilities can transform customer feedback into real-time insights, empowering you to make data-driven decisions and stay ahead of the competition. With our comprehensive understanding of customer needs and preferences, we can help you increase satisfaction, loyalty, and business success. Join us now and take charge of your organization's customer experience!" 
          },
        ]
      },
      { 
        num: "02", 
        title: "Tech Background Check", 
        img: "/techbg.jpg",
        content: [
          { type: "text", heading: "TECH BASED BACKGROUND CHECK: THE KEY TO EFFICIENT AND ACCURATE VERIFICATION", text: "Background checks are a vital part of any business decision-making process. However, traditional verification methods can be time-consuming and resource-intensive. To address these challenges, AI-powered technology has transformed the background verification industry by making it faster, more accurate, and more efficient." },
          { 
            type: "text", 
            text: "Here, we will look at the advantages of technology-based background checks and how BzAnalytics is leading the way in providing this service." 
          },
          { 
            type: "text", 
            subheading: "Fraud Detection - Verify Individual/Corporate", 
            text: "AI-powered technology allows you to conduct extensive background checks on debtors, creditors, vendors, suppliers, and customers for employment, matrimony, business partnerships, and banking. Our prototype can identify, classify, and filter data in a fraction of the time needed by manual, legacy processes. It employs heavy crawling at the backend and Image Processing and Face Recognition algorithms to extract and match text/images, ensuring a quick, accurate, and efficient verification process." 
          },
          { 
            type: "text", 
            subheading: "Tech-enabled Background Check Service", 
            text: "At BzAnalytics, we provide a technologically advanced background check service that enables businesses to make informed decisions about potential candidates, partners, or clients. Our AI-powered technology determines whether applicants have previously engaged in behaviours that indicate they may engage in future counterproductive behaviours on the job or pose a threat to the safety of others; this enables businesses to reduce potential risks while ensuring a safe and secure work environment." 
          },
          { 
            type: "text", 
            subheading: "Data Gathering", 
            text: "Our application can query a large number of data sources in the shortest amount of time while optimizing and standardizing the search. It considers credit history, criminal records, driving records, employment history, military service, education, and personal references. We can provide reliable and accurate background check services using AI-powered technology, making the verification process faster, more accurate, and more efficient." 
          },
          { 
            type: "image", 
            img: "/tech1.jpg", 
            width: "959px", 
            height: "656px",
            mt:"70px"
          },
          { 
            type: "text", 
            text: "Our application can query a large number of data sources in the shortest amount of time while optimizing and standardizing the search. It considers credit history, criminal records, driving records, employment history, military service, education, and personal references. We can provide reliable and accurate background check services using AI-powered technology, making the verification process faster, more accurate, and more efficient." 
          },
        ]
      },
    ]
  },
  {
    slug: "finance",
    title: "Finance",
    projects: [
      { 
        num: "01", 
        title: "BZ Bot", 
        img: "/bzbot.jpg",
        content: [
          { type: "text", heading: "BzBot: Empowering Common Man's Day Trading", text: "Day trading has become a popular way to invest and profit, particularly with the advancement of technology. However, the complex financial markets can be intimidating for newcomers, making them hesitant to participate in this exciting financial adventure. This is where BzBot comes in; BzBot is a user-friendly and accessible day trading tool that combines modern technology and simplicity to make day trading available to everyone." },
          { type: "text", heading: "Empowering Beginners and Experienced Traders", text: "At its core, BzBot is intended to empower people without extensive finance or trading experience. The platform provides an intuitive interface and user-friendly features for a seamless onboarding experience, allowing users to quickly grasp the fundamentals of day trading without the steep learning curve often associated with financial markets. BzBot also accommodates beginners and experienced traders, making it a valuable tool for everyone." },
          { 
            type: "image", 
            img: "/bot1.png", 
            width: "668px", 
            height: "403px",
            mt:"60px",
            mb:"30px"
          },
          { type: "text", heading: "Real-Time Market Analysis", text: "One of the most notable aspects of BzBot is its real-time market analysis capabilities. BzAnalytics enables all its customers to achieve professional-level profits on their investments by providing market-leading trading methods via its day trading tool. Our team developed BzBot with the market's leading global traders and agents. The three building blocks of BzBot are simplicity, high returns, and low risk. The user-friendly interface allows them to begin investing by selecting three simple inputs: the amount of money they want to invest, the time period, and the level of risk they are willing to accept." },
          { type: "text", heading: "Customizable Settings", text: "Accessibility is a fundamental principle incorporated into the design of BzBot. The platform caters to the average user by providing a variety of customizable settings, allowing them to tailor their trading strategies based on their risk tolerance, financial goals, and market preferences. This flexibility gives users control over their trading experience, transforming BzBot into a tool that adapts to each user's needs." },
          { 
            type: "image", 
            img: "/bot2.png", 
            width: "496px", 
            height: "259px",
            mt:"90px",
            mb:"30px"
          },
          { 
            type: "text", 
            text: "Take control of your trading experience with BzBot, the platform that prioritizes accessibility and customization! With a range of customizable settings, BzBot empowers you to tailor your trading strategies to your specific needs. Whether it's adjusting your risk tolerance, pursuing your financial goals, or customizing your market preferences, BzBot puts you in the driver's seat. Reach out to us now and experience the power of a trading tool that adapts to you!" 
          },
        ]
      },
    ]
  }
];

// --- Component ---

export default function ProjectDetailPage() {
  const { slug, projectslug } = useParams();
  const router = useRouter();

  // Find industry and project
  const industry = pageData.find((ind) => ind.slug === slug);
  const project = industry?.projects.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === projectslug);

  if (!project) return <div className="bg-black h-screen text-white flex items-center justify-center">Project Not Found</div>;

  return (
    <>
      <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />
        <BreadcrumbWrapper />
      </section>

      <main className="bg-white dark:bg-black">
        {/* Main Hero Section with Dynamic Sizing */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-20 bg-white dark:bg-black">
          <div className="mt-8 px-4 flex justify-center w-full">
             <img 
               src={project.img} 
               alt={project.title}
               style={{
                 width: project.width || "1150px",
                 height: project.height || "auto",
                 maxWidth: "100%"
               }}
               className="object-cover shadow-xl" 
             />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-8">
          {project.content?.map((item, index) => {
            if (item.type === "text") {
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  key={index} 
                  className="mb-8"
                >

                  {/* Small Heading Component */}
                  {item.smallHeading && (
                    <span className="text-black/50 dark:text-[#EAEAEA] text-[16px]  font-bold mb-2 block">
                      {item.smallHeading}
                    </span>
                  )}

                  {item.subheading && (
                    <span className="text-black dark:text-white text-[30px] font-extrabold leading-relaxed mb-6 block">
                      {item.subheading}
                    </span>
                  )}

                  {item.imgdesc && (
                    <span className="text-black/50 dark:text-white/90 font-medium md:text-[16px] max-w-7xl leading-relaxed block mb-4">
                      {item.imgdesc}
                    </span>
                  )}

                  {item.heading && (
                    <h2 className="text-3xl md:text-[40px] font-extrabold mb-3 text-black dark:text-white">
                      {item.heading}
                    </h2>
                  )}
                  
                  {item.text && (
                    <p className="text-black/50 dark:text-white/90 font-medium md:text-[16px] max-w-7xl leading-relaxed">
                      {item.text}
                    </p>
                  )}
                </motion.div>
              );
            }

            // --- IMAGE GRID RENDERER (Two Images Side-by-Side) ---
if (item.type === "image-grid") {
  return (
    <div 
      key={index} 
      style={{ marginTop: item.mt || "0px", marginBottom: item.mb || "4rem" }}
      className="w-full"
    >
      <div 
        className="grid grid-cols-1 md:grid-cols-2" 
        style={{ gap: item.gap || "2rem" }}
      >
        {item.imageGridData?.slice(0, 2).map((image, iIndex) => (
          <motion.div 
            key={iIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <img 
              src={image.img} 
              alt={`grid-img-${iIndex}`}
              style={{ 
                width: image.width || "100%", 
                height: image.height || "auto",
                objectFit: "cover" 
              }}
              className=""
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// --- VIDEO RENDERER ---
if (item.type === "video") {
  return (
    <div 
      key={index} 
      style={{ marginTop: item.mt || "0px", marginBottom: item.mb || "4rem" }}
      className="w-full flex justify-center"
    >
      <div className="relative overflow-hidden rounded-lg shadow-2xl" style={{ width: item.width || "100%", height: item.height || "auto" }}>
        <video
          src={item.videoUrl}
          autoPlay={item.autoPlay ?? true}
          loop={item.loop ?? true}
          muted={item.muted ?? true}
          controls={item.controls ?? true}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

          // --- BULLET LIST RENDERER ---
if (item.type === "bullet-list") {
  return (
    <div 
      key={index} 
      style={{ marginTop: item.mt || "0px", marginBottom: item.mb || "4rem" }}
      className="max-w-6xl"
    >
      <ul className="space-y-2">
        {item.bulletListData?.map((bullet, bIndex) => (
          <motion.li 
            key={bIndex}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: bIndex * 0.05 }}
            className="flex items-start gap-3"
          >
            {/* The Dot */}
            <span className="text-white text-[16px] flex-shrink-0">•</span>
            
            <p className="text-[16px] leading-relaxed font-medium text-black/90 dark:text-[#EAEAEA]">
              <strong className=" font-extrabold text-black/90 dark:text-[#EAEAEA]">{bullet.title}</strong> {bullet.desc}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

            // --- NEW COLUMNS RENDERER (Multi-column Text) ---
            if (item.type === "columns") {
              return (
                <div 
                  key={index} 
                  style={{ marginTop: item.mt || "0px", marginBottom: item.mb || "4rem" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-3 pb-10 bg-[#101010]"
                >
                  {item.columnData?.map((col, cIndex) => (
                    <motion.div 
                      key={cIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: cIndex * 0.1 }}
                      className="pt-10 pr-10 ps-15" // Spacing from Top (pt) and Right (pr)
                    >
<h3 className="text-3xl md:text-[30px] font-extrabold mb-[15px] text-white">
  {col.heading}
</h3>
<p className="text-[#EAEAEA] text-[14px] border-b pb-8 leading-relaxed font-medium">
  {col.text}
</p>
                    </motion.div>
                  ))}
                </div>
              );
            }

            // --- LIST RENDERER (Action Points) ---
            if (item.type === "list") {
              return (
                <div key={index} style={{ marginTop: item.mt || "0px", marginBottom: item.mb || "4rem" }}>
                  {item.heading && (
                    <h2 className="text-3xl md:text-[30px] font-extrabold mb-8 text-black dark:text-white">
                      {item.heading}
                    </h2>
                  )}
                  <ul className="space-y-6">
                    {item.points?.map((point, pIndex) => (
                      <motion.li 
                        key={pIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pIndex * 0.1 }}
                        className="flex items-start mb-2 gap-4"
                      >
                        <div className="mt-1">
                          <Check className="text-[#F5900D] w-4 h-4 stroke-[5px]" />
                        </div>
                        <p className="text-black/80 dark:text-white/90 text-[15px] font-bold leading-relaxed">
                          {point}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              );
            }

            // --- NEW GRID RENDERER (Side-by-Side) ---
            if (item.type === "grid") {
              return (
                <div 
                  key={index} 
                  style={{ marginTop: item.mt || "0px", marginBottom: item.mb || "4rem" }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${item.reverse ? 'md:flex-row-reverse' : ''}`}
                >
                  <motion.div 
                    initial={{ opacity: 0, x: item.reverse ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`${item.reverse ? 'md:order-2' : 'md:order-1'}`}
                  >
                    {item.smallHeading && <span className="text-black dark:text-white text-[30px] font-extrabold leading-relaxed mb-6 block">{item.smallHeading}</span>}
                    {item.heading && <h2 className="text-3xl md:text-[40px] font-extrabold mb-6 text-black dark:text-white leading-tight">{item.heading}</h2>}
                    {item.text && <p className="text-black/50 dark:text-white/80 text-[18px] leading-relaxed">{item.text}</p>}
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: item.reverse ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`${item.reverse ? 'md:order-1' : 'md:order-2'}`}
                  >
                    <img 
                      src={item.img} 
                      alt="Data analysis" 
                      style={{ width: item.width || "100%", height: item.height || "auto" }}
                      className="shadow-lg object-contain"
                    />
                  </motion.div>
                </div>
              );
            } 

            if (item.type === "image") {
              return (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  key={index}
                  style={{ 
                    marginTop: item.mt || "0px", 
                    marginBottom: item.mb || "0rem" // Default mb if none provided
                  }}
                  className="w-full mb-1 flex justify-start overflow-hidden"
                >
                  <img 
                    src={item.img} 
                    alt="Project section" 
                    style={{
                      width: item.width || "100%",
                      height: item.height || "auto",
                      maxWidth: "100%"
                    }}
                    className=" " 
                  />
                </motion.div>
              );
            }

            return null;
          })}
        </section>

        {/* Navigation Section */}
        <section className="max-w-7xl mx-auto px-6 pb-32 mt-10">
          <div className="flex justify-between items-center border-t border-black dark:border-white/10 py-8 mb-20 border-b">
            <button onClick={() => router.back()} className="flex items-center gap-4 group text-lg font-bold cursor-pointer dark:text-white">
              <div className="p-4 rounded-full bg-[#101010] group-hover:bg-[#F5900D] transition-all">
                <ChevronLeft className="text-white" />
              </div>
              <span className="group-hover:text-orange-400">Previous</span>
            </button>
            
            <button className="flex items-center gap-4 group text-lg font-bold cursor-pointer dark:text-white">
              <span className="group-hover:text-orange-400">Next</span>
              <div className="p-4 rounded-full bg-[#101010] group-hover:bg-[#F5900D] transition-all">
                <ChevronRight className="text-white" />
              </div>
            </button>
          </div>

          <div className="text-center mb-12">
            <div className="w-2 h-2 bg-[#F5900D] rounded-full mx-auto mb-4" />
            <p className="uppercase text-[14px] text-black/50 dark:text-[#EAEAEA] mb-2 font-medium">Our Work Showcase</p>
            <h2 className="text-4xl md:text-[45px] font-extrabold dark:text-white">Explore similar portfolio<br/>you might like it</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { name: "AI Sustainability", img: "/turf.jpg" },
              { name: "Minecraft Game", img: "/minecraft.jpg" },
              { name: "AI Medical Imaging", img: "/medical.jpg" }
            ].map((item, i) => (
              <motion.div whileHover={{ y: -10 }} key={i} className="group cursor-pointer">
                <div className="w-full h-[350px] overflow-hidden mb-4">
                  <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <h4 className="text-2xl text-black dark:text-white font-black">{item.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}