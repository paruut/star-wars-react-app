import React from "react";
import { useEffect, useState } from "react";

const Profile = () => {
  const [character, setCharacter] = useState({});
  const [count, setCount] = useState(1);

  const characters = JSON.parse(localStorage.getItem("character")) || [];

  async function fetchPeople(id) {
    try {
      const res = await fetch(`https://swapi.dev/api/people/${id}`);
      const data = await res.json();
      setCharacter(data);
      if (!characters.some((el) => el.name == data.name)) {
        characters.push(data);
      }
      localStorage.setItem("character", JSON.stringify(characters));
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchPeople(count);
  }, [count]);

  return (
    <div className="section-page">
      <section>
        <div className="section-content">
          <div className="section-background"></div>
          <div className="section-icons">
            <h1>{character.name}</h1>
            <img src="/public/icon.svg" />
            <img src="/public/icon2.svg" />
          </div>
          <p>age: {character.birth_year} </p>
          <p>eye color: {character.eye_color} </p>
        </div>
        <div></div>
        <button onClick={() => setCount(count + 1)} className="profiles-btn">
          <span>next profiles</span>
        </button>
      </section>
    </div>
  );
};

export default Profile;
