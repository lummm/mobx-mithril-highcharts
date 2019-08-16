import { observable, computed } from "mobx"
import { CountDataPoint } from "../types/CountDataPoint";


class CountStore {

  @observable
  private count: number = 0;

  @observable
  private dataPoints: CountDataPoint[] = [{
    count: this.count,
    time: new Date().getTime(),
  }];

  @computed
  public get currentCount(): number {
    return this.count;
  }

  @computed
  public get historicalIncrements(): CountDataPoint[] {
    return this.dataPoints;
  }

  public incrementCount(): void {
    this.count += 1;
    this.dataPoints.push({
      count: this.count,
      time: new Date().getTime(),
    });
  }

}

export const countStore = new CountStore();
