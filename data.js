const portfolioData = {
  name: "Rionaldi Nugroho",

  title: "Electronics & Robotics Engineer",

  metaDescription:
    "Portfolio single-page untuk electronics and robotics engineer.",

  // Ganti dengan path foto profil kamu, contoh: "assets/profile/foto-saya.jpg".
  // Pakai garis miring biasa "/", bukan backslash "\".
  profileImage: "assets/profile/profile.jpg",

  hero: {
    label: "3D Modeling - Robotics - Automation",

    tagline:
      "Electronics and robotics engineer focused on building reliable embedded systems, autonomous prototypes, and clean hardware-software integrations.",

    primaryButton: "View Projects",

    secondaryButton: "Contact Me"
  },

  about: {
    eyebrow: "About",

    heading:
      "Engineering practical systems with precise details.",

    bio:
      "Electronics Engineering student specializing in embedded systems, robotics, and sensor integration. Experienced in AI, machine learning, and computer vision for microcontroller-based systems. Skilled in 3D mechanical design using Autodesk Inventor and Fusion 360, with experience as a robotics mechanic for UNY and forklift mechanic at CV. Karya Hidup Sentosa. Currently serving as Team Leader of the UNY KRTMI robotics team.",

    skills: [
      "Arduino / ESP32",
      "C / C++ / Python",
      "IoT & Sensor Networks",
      "3D Modeling",
      "PCB Prototyping",
      "ROS Fundamentals"
    ]
  },

  experiences: {
    eyebrow: "Experiences",

    heading: "Selected engineering timeline.",

    items: [
      {
        period: "2022 - 2023",

        role: "Forklift Maintenance",

        image:
          "assets/experiences/quick.jpg",

        description:
          "Experienced in diagnosing and repairing mechanical, electrical, and hydraulic systems on forklift units, including systematic troubleshooting to identify root causes of failures. Skilled in performing electrical measurements and fault analysis using multimeters, as well as carrying out preventive and corrective maintenance to maintain operational reliability and performance."
      },

      {
        period: "2023 - 2026",

        role: "Mechanic of UNY Robotic Team",

        image:
          "assets/experiences/mekanik.jpg",

        description:
          "Experienced in designing and developing robotic mechanical systems using Autodesk Inventor and Fusion 360, including the integration of mechanical structures with electronic systems and sensors to ensure optimal performance. Skilled in fabrication, assembly, testing, troubleshooting, and hardware integration for robotics systems."
      },

      {
        period: "2025 - 2026",

        role: "Leader of KRTMI UNY",

        image:
          "assets/experiences/krtmi.jpg",

        description:
          "Experienced in leading end-to-end robotics system development from design and integration to testing, while coordinating cross-functional teams across electronics, mechanical, and programming divisions to ensure system synchronization."
      },

      {period: "2024",

        role: "Liaison Officer of Indonesian Flying Robot Competition (KRTI) 2024 ",

        image:
          "assets/experiences/krti.jpg",

        description:
          "Monitored Long-Endurance Low-Altitude (LELA) division aircraft movements, reported real-time flight observations to judges, and assisted with technical coordination during the competition."
      }
    ]
  },

  projects: {
    eyebrow: "Projects",

    heading: "Hardware meets clean software.",

    items: [
      {
        title: "Automated Waste Shorting Robot",

        image:
          "assets/projects/krtmi.jpg",

        // Isi url dengan link GitHub, demo, video, atau dokumentasi project.
        url:
          "https://www.instagram.com/reel/DJ4zPXeTdtm/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",

        linkLabel: "View Project",

        description:
          "This is an autonomous mobile robot equipped with a 3-DOF robotic arm, specifically developed to compete in the Kontes Robot Tematik Indonesia (KRTMI). The system features an eye-on-hand computer vision setup, placing the camera directly on the arm to dynamically scan, identify, and classify waste into multiple categories. This configuration allows the robot to achieve highly flexible visual tracking, enabling the mobile platform and the 3-DOF manipulator to coordinate seamlessly for fast and precise automated waste sorting within the competition arena."
      },

      {
        title: "Selfbalancing Seesaw",

        image:
          "assets/projects/seesaw.png",

        url:
          "https://www.instagram.com/reel/DEGa_FRz0gp/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",

        linkLabel: "View Project",

        description:
          "This is a PID-based self-balancing seesaw system designed to stabilize a cylindrical object on a dynamic track. The system utilizes an ultrasonic sensor to continuously monitor the object's position and feed the distance data into a PID controller. Based on this feedback, the PID algorithm calculates the precise angle correction needed, instantly commanding a servo motor to adjust the track's tilt and keep the cylinder perfectly balanced at its designated setpoint."
      },

      {
        title: "ROS2-Based JetBot AI Autonomous Localization Using 360-LiDAR",

        image:
          "assets/projects/jetson.png",

        url:
          "https://www.instagram.com/reel/DMW8TBLx50q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

        linkLabel: "View Project",

        description:
          "This is a robot aimed at achieving real-time autonomous localization by integrating a 360-degree LiDAR, Fuzzy-Kalman Filter sensor fusion, and Monte Carlo Localization (AMCL) within the ROS2 ecosystem."
      },
            {
        title: "IoT-Based DC Motor Monitoring and Protection System",

        image:
          "assets/projects/iot.png",

        url:
          "",

        linkLabel: "View Project",

        description:
          "An IoT prototype designed to monitor DC motor performance in real-time. It features automated protection against overloads and utilizes Firebase Realtime Database for remote data logging."
      },
            {
        title: "AI-Based Music Genre Classification System.",

        image:
          "assets/projects/lagu.jpeg",

        url:
          "https://www.instagram.com/reel/DRpVSSiE4LZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

        linkLabel: "View Project",

        description:
          "This AI-powered web platform classifies music genres by extracting a 30-second sample from an uploaded song and converting it into a spectrogram for EfficientNet-B2 analysis. Utilizing a local MQTT broker for asynchronous communication, the system seamlessly transmits real-time classification results from the AI backend to an interactive web dashboard."
      },
  {
        title: "Computer Vision-Based Automatic Waste Sorting Bin Development.",

        image:
          "assets/projects/bin.png",

        url:
          "https://www.instagram.com/reel/DRtFpJDEw5d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

        linkLabel: "View Project",

        description:
          "This is a computer vision-based automatic waste sorting bin designed to classify and separate trash in real-time. Utilizing the compact YOLOv11n model, the system accurately identifies waste into two distinct categories, which then triggers a servo motor mechanism to physically sort the trash into its respective compartment."
      },
  {
        title: "Kinematics and Inverse Kinematics-Based Autonomous Transporter Robot Development.",

        image:
          "assets/projects/transporter.jpg",

        url:
          "https://www.instagram.com/reel/DRuCzN6kc6F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

        linkLabel: "View Project",

        description:
          "This is an autonomous transporter robot designed to move items automatically using a combination of forward kinematics and inverse kinematics equations. After the user inputs the target coordinates, the robot autonomously navigates to the specified location, retrieves the item using a front-mounted single gripper, and returns it to the starting coordinate with high positioning accuracy."
      },
  {
        title: "ROS-Based 4-DOF Robotic Arm Development.",

        image:
          "assets/projects/arm.jpeg",

        url:
          "",

        linkLabel: "View Project",

        description:
          "This is an autonomous 4-DOF robotic arm system powered by Raspberry Pi 5 and synchronized through ROS for automated object sorting. The system utilizes an eye-to-hand computer vision setup to detect target objects and determine their exact coordinates. Once the target location is identified, the end-effector automatically navigates using inverse kinematics equations to retrieve the object and deposit it into designated sorting bins, with the entire operation monitored and controlled via a custom-built GUI."
      },      
    ]
  },

  achievements: {
    eyebrow: "Achievements",

    heading:
      "Milestones and recognitions.",

    items: [
      {
        title: "KRI Regional Champion",

        image:
          "assets/achievements/regional.jpeg",

        description:
          "1st Place Regional Division KRTMI."
      },

      {
        title:
          "Runner-up of KRI Thematic Robot Division (KRTMI) | 2024",

        image:
          "assets/achievements/nasional.jpeg",

        description:
          "2nd Place in the KRI Thematic Robot Division (KRTMI) | 2024"
      },

      {
        title:
          "Finalist of Outstanding Student Award (Mawapres) – Universitas Negeri Yogyakarta | 2024",

        image:
          "assets/achievements/mapres.jpg",

        description:
          "Selected as one of the top finalists representing the Faculty of Vocational Studies in the university-level selection."
      }
    ]
  },

  contact: {
    eyebrow: "Contact",

    heading:
      "Let's build something precise.",

    description:
      "Open for engineering collaboration, internships, research projects, and prototype development.",

    links: [
      {
        label: "GitHub",

        icon: "fa-brands fa-github",

        url:
          "https://github.com/Rionaldi-nu"
      },

      {
        label: "LinkedIn",

        icon:
          "fa-brands fa-linkedin-in",

        url:
          "https://www.linkedin.com/in/rionaldi-nugroho/"
      },

      {
        label: "Email",

        icon: "fa-solid fa-envelope",

        url:
          "mailto:your.Naldirio386@gmail.com"
      }
    ]
  }
};
