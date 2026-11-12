import { Link } from "react-router";

const Info = ({ title, informations }) => {
  return (
    <div>
      <p className="font-bold pb-5">{title}</p>
      <ul className="flex flex-col gap-3">
        {informations.map((item) => (
          <li key={item.link}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Info;