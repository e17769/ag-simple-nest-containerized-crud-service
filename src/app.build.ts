import { makeBadge } from 'badge-maker';

export class appBuild {
  static buildIcons() {
    const format = {
      label: 'build',
      message: 'passed',
      color: 'green',
    };

    const svg = makeBadge(format);
    console.log(svg); // <svg...

    try {
      makeBadge(format);
    } catch (e) {
      console.log(e); // ValidationError: Field `message` is required
    }
  }
}
