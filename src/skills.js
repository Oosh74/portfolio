const Skills = ({ name, imageUrl }) => (
  <div className="imageContainer">
    <p>{name}</p>
    <img src={imageUrl} alt={name.toLowerCase()} />
  </div>
);

export default Skills;
