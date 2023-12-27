import classes from "./loading.module.css";
export const Loading: React.FC = () => {
    return <p className={classes.loading}>{"...fetching meals"}</p>;
};

export default Loading;
