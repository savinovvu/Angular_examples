import {animate, state, style, transition, trigger} from '@angular/animations';


export const HighlightTrigger = trigger('rowHighlight', [
  state('selected', style({
    backgroundColor: 'lightgreen',
    fontSize: '20px'
  })),
  state('notselected', style({
    backgroundColor: 'lightsalmon',
    fontSize: '12px'
  })),
  state('*', style({
    border: 'solid black 2px'
  })),
  state('void', style({
    opacity: 0,
    transform: "translateX(-50%)"
  })),


  transition('selected => notselected', animate('200ms')),
  transition('notselected => selected', animate('400ms')),
  transition('* => notselected', animate('200ms ease-out')),
  transition('* => selected',animate('400ms ease-out')),
  transition('notselected => *', animate('200ms')),
  transition('selected => *', animate('400ms')),
  transition('void => *', animate('500ms linear')),
]);
