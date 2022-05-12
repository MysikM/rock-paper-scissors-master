import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';
import lizard from '../assets/images/icon-lizard.svg';
import spock from '../assets/images/icon-spock.svg';


export const namesFigure = {
    rock : 'rock',
    paper : 'paper',
    scissors : 'scissors',
    lizard : 'lizard',
    spock : 'spock'
};

export const boardItems = [
    {src: rock, title: 'rock' },
    {src: paper, title: 'paper' },
    {src: scissors, title: 'scissors' },
    {src: lizard, title: 'lizard' },
    {src: spock, title: 'spock' },
];

export const normalGame = {
    [`${namesFigure.rock}`] : [`${namesFigure.scissors}`],
    [`${namesFigure.scissors}`] : [`${namesFigure.paper}`],
    [`${namesFigure.paper}`] : [`${namesFigure.rock}`],
};

export const modeOnGame = {
    [`${namesFigure.rock}`] : [`${namesFigure.scissors}`, `${namesFigure.lizard}` ],
    [`${namesFigure.scissors}`] : [`${namesFigure.paper}`, `${namesFigure.lizard}`],
    [`${namesFigure.paper}`] : [`${namesFigure.rock}`, `${namesFigure.spock}`],
    [`${namesFigure.lizard}`] : [`${namesFigure.paper}`, `${namesFigure.spock}`],
    [`${namesFigure.spock}`] : [`${namesFigure.scissors}`, `${namesFigure.rock}`],
};