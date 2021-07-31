export interface SquareData {
	row: number
	column: number
	across: number | null
	down: number | null
	displayedNumber: number | null
	answer: string | null
	guess: string
}

export type PuzzleData = SquareData[]
export enum SpecialKey {
	Arrow = 'Arrow',
	Backspace = 'Backspace',
	SpaceBar = 'SpaceBar',
}

export interface BoardProps {
	puzzleData: PuzzleData
	activeSquareIndex: number
	activeDirection: 'across' | 'down'
	toggleDirection: () => void
	convertInactiveSquareToActiveSquare: (clickedSquare: SquareData) => void
	inputUserGuess: (e: React.KeyboardEvent<HTMLInputElement>) => void
	userAnswers: (string | null)[]
	convertNextSquareToActiveSquare: (specialCase?: SpecialKey) => void
	convertLowerIndexedSquareToActiveSquare: (specialCase?: SpecialKey) => void
}

export interface SquareProps {
	squareData: SquareData
	isActive: boolean
	activeDirection: 'across' | 'down'
	highlightableRow: number
	highlightableColumn: number
	toggleDirection: () => void
	convertInactiveSquareToActiveSquare: (clickedSquare: SquareData) => void
	inputUserGuess: (e: React.KeyboardEvent<HTMLInputElement>) => void
	userGuess: string | null
	convertNextSquareToActiveSquare: (specialCase?: SpecialKey) => void
	convertLowerIndexedSquareToActiveSquare: (specialCase?: SpecialKey) => void
}

export interface CluesProps {
	clues: {
		across: {
			[key: string]: string
		}
		down: {
			[key: string]: string
		}
	}
	activeClue: string
	activeSquare: SquareData
}

export interface CluesListProps {
	direction: string
	directionalClues: {
		[key: string]: string
	}
	activeClue: string
	activeSquare: SquareData
}

export interface TimerProps {
	timer: number
	pauseTimer: () => void
	resumeTimer: () => void
}
