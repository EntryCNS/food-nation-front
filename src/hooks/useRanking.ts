import React from "react";
import { IRanking } from "interface/ranking/IRanking";

const useRanking = (data: IRanking[]) => {
  const top3: IRanking[] = [];
  const other: IRanking[] = [];

  data.map((card: IRanking, idx) => {
    idx < 3 ? top3.push(card) : other.push(card);
  });

  return { top3, other };
};

export default useRanking;
