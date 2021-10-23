import React from "react";
import "./clothing.css";

function Clothing() {
  return (
    <div className="content">
      <div className="dance-1">
        <h3> Indian Clothing & Attires </h3>
        <p>
          {" "}
          Clothing in India is dependent upon the different ethnicity,
          geography, climate, and cultural traditions of the people of each
          region of India. Historically, male and female clothing has evolved
          from simple garments like kaupina, langota, dhoti, lungi, sari,
          gamcha, and loincloths to cover the body into elaborate costumes not
          only used in daily wear, but also on festive occasions, as well as
          rituals and dance performances. In urban areas, western clothing is
          common and uniformly worn by people of all social levels. India also
          has a great diversity in terms of weaves, fibers, colours, and
          material of clothing. Sometimes, color codes are followed in clothing
          based on the religion and ritual concerned. The clothing in India also
          encompasses the wide variety of Indian embroidery, prints, handwork,
          embellishment, styles of wearing clothes. A wide mix of Indian
          traditional clothing and western styles can be seen in India.
        </p>
      </div>

      <div className="container">
        <div className="card">
          <div className="bg-image">
            <img src="../images/kashmiri-ladies.jpg" alt="bla" />
          </div>
          <div className="info">
            <h3>Kashmir Dress</h3>
          </div>
        </div>
        <div className="card">
          <div className="bg-image">
            <img src="../images/Punjabcolors.jpg" alt="bla" />
          </div>
          <div className="info">
            <h3>Punjabi Dress</h3>
          </div>
        </div>
        <div className="card">
          <div className="bg-image">
            <img src="../images/nepali.jpg" alt="bla" />
          </div>
          <div className="info">
            <h3>Nepali Dress</h3>
          </div>
        </div>
        <div className="card">
          <div className="bg-image">
            <img src="../images/muslim.jpg" alt="bla" />
          </div>
          <div className="info">
            <h3>Muslim Dress</h3>
          </div>
        </div>
        <div className="card">
          <div className="bg-image">
            <img src="../images/men.jpg" alt="bla" />
          </div>
          <div className="info">
            <h3>Men Wear</h3>
          </div>
        </div>
        <div className="card">
          <div className="bg-image">
            <img src="../images/tibat.jpg" alt="bla" />
          </div>
          <div className="info">
            <h3>Tibetian Wear</h3>
          </div>
        </div>
        <div className="card">
          <div className="bg-image">
            <img src="../images/lahnga.jpg" alt="bla" />
          </div>
          <div className="info">
            <h3>Lehenga</h3>
          </div>
        </div>
        <div className="card">
          <div className="bg-image">
            <img src="../images/saree.jpg" alt="bla" />
          </div>
          <div className="info">
            <h3>Saree</h3>
          </div>
        </div>
        <div className="card">
          <div className="bg-image">
            <img src="../images/indian.jpg" alt="bla" />
          </div>
          <div className="info">
            <h3>South Wear</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clothing;
