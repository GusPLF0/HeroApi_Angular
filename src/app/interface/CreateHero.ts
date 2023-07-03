import { Race } from "../components/enum/race.enum";

export interface CreateHero {
  name: string;
  race: Race;
  strength: number,
  agility: number,
  dexterity: number,
  intelligence: number,
  enabled?: boolean
}
