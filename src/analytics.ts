import * as $ from 'jquery';

function createAnalitics(): object {
  let counetr = 0;
  let destroyed:boolean = false;
  const listener = (): number => counetr++;

  $(document).on('click', listener);
  return {
    destroy() {
      $(document).of('click', listener);
      destroyed = true;
    },
    getClicks() {
      if (destroyed) {
        return 'analitics is destoyed';
      }
      return counetr;
    },
  };
}

window.['analyticks'] = createAnalitics();
