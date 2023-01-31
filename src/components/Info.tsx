import { Tooltip, Button } from '@nextui-org/react';

export const Info = () => {
  return (
    <Tooltip
      className="tooltip"
      content={
        <ul className="tooltip-list">
          <li>Welcome to FEngage Stat Growth Calculator!</li>
          <li>
            Mix and match character & classes to obtain overall growths and stap
            caps.
          </li>
          <li>Jean has double class growths due to Expertise.</li>
          <li>Starsphere adds 15% across all stats.</li>
          <li>
            Class Types: Backup(B), Covert(C), Cavalry(Ca) Mystical(M),
            Flying(F), Qi Adept(Q), Dragon(D), Armor(A)
          </li>
          <li>
            You can sort Class and Character tables based on Stats. Just click
            on the respective Stat header like STR or MAG.
          </li>
          <li>Maximum possible stats are shown in the Stat Caps row.</li>
        </ul>
      }
      placement="bottomStart"
    >
      <Button auto flat>
        Instructions
      </Button>
    </Tooltip>
  );
};
