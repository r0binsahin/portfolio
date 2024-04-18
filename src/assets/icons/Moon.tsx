interface IMoonProps {
  fill: string;
}

export const Moon = ({ fill }: IMoonProps) => {
  return (
    <svg
      className="moon"
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
    >
      <path
        d="M9 4.90541C8.92118 5.75832 8.60108 6.57114 8.07717 7.24877C7.55325 7.9264 6.84718 8.4408 6.04158 8.73179C5.23597 9.02278 4.36416 9.07832 3.52814 8.89191C2.69213 8.7055 1.92649 8.28485 1.32082 7.67918C0.715153 7.07351 0.294502 6.30787 0.108091 5.47186C-0.0783207 4.63584 -0.0227826 3.76403 0.268207 2.95842C0.559196 2.15282 1.0736 1.44675 1.75123 0.922834C2.42886 0.398916 3.24168 0.0788199 4.09459 0C3.59524 0.675567 3.35495 1.50792 3.41742 2.34568C3.4799 3.18344 3.84099 3.97095 4.43502 4.56498C5.02905 5.15901 5.81656 5.5201 6.65432 5.58258C7.49208 5.64505 8.32443 5.40476 9 4.90541Z"
        fill={fill}
      />
    </svg>
  );
};
