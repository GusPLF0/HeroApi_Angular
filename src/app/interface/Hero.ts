import { Race } from "../components/enum/race.enum";

export interface Hero {
  heroId: string;
  name: string;
  race: Race;
  strength: number,
  agility: number,
  dexterity: number,
  intelligence: number,
  created_at: Date;
  updated_at: Date;
  enabled: boolean;
}
