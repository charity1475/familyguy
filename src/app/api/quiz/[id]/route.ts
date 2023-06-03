import questions from '@/data/quiz.json'
import { NextRequest, NextResponse } from 'next/server'

interface PageProps {
    params: {
        id: string
    }
}

export async function GET(req: NextRequest, { params }:PageProps) {
  try {
    const question = questions.data.find(item => item.id === params.id)

    if (!question) {
      return new NextResponse('not found', { status: 404 })
    }

    const { correct_answer, ...rest } = question

    return NextResponse.json({
      question: rest,
    })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}