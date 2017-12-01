
import { Observable } from '../../Observable';
import { expand } from '../../internal/patching/operator/expand';

Observable.prototype.expand = expand;

declare module '../../Observable' {
  interface Observable<T> {
    expand: typeof expand;
  }
}
