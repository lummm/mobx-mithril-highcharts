import { observable, computed } from "mobx"


class CountStore {

  @observable
  private count = 0;

  @computed
  public get currentCount(): number {
    return this.count;
  }

  public incrementCount(): void {
    this.count += 1;
  }

}

export const countStore = new CountStore();
