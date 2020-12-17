import chalk from 'chalk';

export const logger = {
    blue: (msg: string) => console.log(chalk.blue(msg)),
    red: (msg: string) => console.log(chalk.red(msg)),
    yellow: (msg: string) => console.log(chalk.yellow(msg)),
    green: (msg: string) => console.log(chalk.green(msg)),
};
