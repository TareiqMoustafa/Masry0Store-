import { basicsData } from './basics';
import { redTeamData } from './redTeam';
import { blueTeamData } from './blueTeam';
import { socData } from './soc';
import { grcData } from './grc';
import { forensicsData } from './forensics';
import { malwareData } from './malware';

export interface Chapter {
  number: number;
  title: string;
  content: string;
}

export interface PathData {
  id: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  level: string;
  chaptersCount: number;
  pages: string;
  icon: string;
  chapters: Chapter[];
}

export const allPaths: PathData[] = [
  basicsData,
  redTeamData,
  blueTeamData,
  socData,
  grcData,
  forensicsData,
  malwareData,
];

export function getPathById(id: string): PathData | undefined {
  return allPaths.find((p) => p.id === id);
}

export { basicsData, redTeamData, blueTeamData, socData, grcData, forensicsData, malwareData };
