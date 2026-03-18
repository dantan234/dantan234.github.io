export const projects = [
  {
    slug: "example-2",
    title: "ClearPath AI (Hackathon Prototype)",
    subtitle: "Vision-based ADAS Collision Warning System",
    heroVideo: "/clearpath-hero.mp4",
    summaryParagraphs: [
      "For HackTX 2024, our team came up with the idea to use our smartphones as an ADAS device. We developed an app that ran an object deteciton model that would detect other vehicles and pedestrians using an iPhone camera. The app drew bounding boxes over the objects detected and played warning noises while flashing warning signs to alert the driver.",
      "This project served as a proof of concept for edge deployment of object detection models for driving safety.",
    ],
    detailsLink: "https://devpost.com/software/clearpath-ai",
    detailsNote: "Details coming soon.",
  },
  {
    slug: "example-1",
    title: "Visual Odometry",
    subtitle: "A real-time Monocular Visual Odometry system integrated with YOLO-based object tracking and Time-to-Collision (TTC) estimation for autonomous safety.",
    heroVideo: "/visual-odometry-hero.mov",
    summary: "My current project involves combining visual odometry with the work I did on ClearPath AI. By getting the current trajectory of the ego vehicle and using an object detection model to get the trajectory of external objects, we can provide more meaningful warnings to the driver as an ADAS system.",
    detailsLink: "https://github.com/dantan234/visual_odometry",
    detailsNote: "Details coming soon.",
  },
];
