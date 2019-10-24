/**
 * @module typings/core
 */
import { ITransitionData, ITransitionPage, IViewData } from '.';

export type HooksBarba =
  | 'ready'
  | 'page'
  | 'reset'
  | 'currentAdded'
  | 'currentRemoved'
  | 'nextAdded'
  | 'nextRemoved';

export type HooksAppear =
  | 'beforeAppear'
  | 'appear'
  | 'afterAppear'
  | 'appearCanceled';

export type HooksPage =
  | 'before'
  | 'beforeLeave'
  | 'leave'
  | 'afterLeave'
  | 'leaveCanceled'
  | 'beforeEnter'
  | 'enter'
  | 'afterEnter'
  | 'enterCanceled'
  | 'after';

export type HooksBefore = 'beforeAppear' | 'beforeLeave' | 'beforeEnter';
export type HooksAfter = 'afterAppear' | 'afterLeave' | 'afterEnter';

export type HooksTransition = HooksAppear | HooksPage;
export type HooksView = HooksBefore | HooksAfter;
export type HooksAll = HooksBarba | HooksTransition;

// Allow optional "dynamically created" hooks
export type HooksTransitionMap = { [key in HooksTransition]?: any };

export type HookFunction = (
  data?: ITransitionData | IViewData,
  t?: ITransitionPage
) => Promise<void> | void;

export class HookMethods {
  public before?: (fn: HookFunction, ctx?: any) => void;
  public beforeLeave?: (fn: HookFunction, ctx?: any) => void;
  public leave?: (fn: HookFunction, ctx?: any) => void;
  public afterLeave?: (fn: HookFunction, ctx?: any) => void;
  public leaveCanceled?: (fn: HookFunction, ctx?: any) => void;
  public beforeEnter?: (fn: HookFunction, ctx?: any) => void;
  public enter?: (fn: HookFunction, ctx?: any) => void;
  public afterEnter?: (fn: HookFunction, ctx?: any) => void;
  public enterCanceled?: (fn: HookFunction, ctx?: any) => void;
  public after?: (fn: HookFunction, ctx?: any) => void;
}
