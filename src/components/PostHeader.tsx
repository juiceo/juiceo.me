import styles from "./PostHeader.module.css";

export interface PostHeaderProps {
  title: string;
  description: string;
}

export const PostHeader = (props: PostHeaderProps) => {
  return (
    <div className={styles.container}>
      <h1 className="text-3xl text-center">{props.title}</h1>
      <p className="text-xl text-gray-400 text-center">{props.description}</p>
    </div>
  );
};
