import { twMerge } from "tailwind-merge";

const LearnMoreButton = (props: React.ComponentPropsWithoutRef<"button"> & { color?: string }) => {
  const { className, children, color } = props;

  return (
    <div>
      <button
        className={twMerge(
          "text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500",
          color === "lime" && "text-lime-500",
          color === "cyan" && "text-cyan-500",
          color === "violet" && "text-violet-500",
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default LearnMoreButton;
