import "./testimonials.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "M.Tech",
      title: "Department of Technology, Savitribai Phule Pune University",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
      cgpa: 68.6,
    },
    {
      id: 2,
      name: "B.E.",
      title: "Sinhgad Institute of Technology, Lonavala",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
      cgpa: 68.53,
    },
    {
      id: 3,
      name: "HSC",
      title: "Vidyadham Jr. College of Science, Shirur, Pune",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
      cgpa: 76.0,
    },
    {
      id: 3,
      name: "SSC",
      title: "Vidya Vikas Mandir, Nimgaon Mhalungi",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
      cgpa: 85.69,
    },
  ];
  return (
    <div className="testimonials" id="educations">
      <h1>Educations</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top"></div>
            <div className="center">
              <span style={{ height: 100, width: 100 }}>
                <CircularProgressbar value={d.cgpa} text={`${d.cgpa}%`} />
              </span>
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
