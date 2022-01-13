import { animate, AnimationTriggerMetadata, style, transition, trigger } from "@angular/animations";

export const onModalOpen: AnimationTriggerMetadata = trigger(
    'onModalOpen',
    [
      transition(
        ':enter',
        [
          style({ transform:'scale(0)', opacity:0}),
          animate('0.6s ease-out',
            style({ transform:'scale(1)', opacity:1}))
        ]
      ),
      transition(
        ':leave',
        [
          style({ transform:'scale(1)', opacity:1}),
          animate('0.6s ease-out',
            style({ transform:'scale(0)', opacity:0}))
        ]
      ),
    ]
  )