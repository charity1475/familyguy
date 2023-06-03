import characters from '@/data/characters.json';
import { NextRequest, NextResponse } from 'next/server'
import qoutes from '@/data/quotes.json';

export async function GET(req:NextRequest, { params }:any) {
    try {
      const character = characters.data.find(item => item.slug === params.slug)
  
      if (!character) {
        return new NextResponse('not found', { status: 404 })
      }
  
      const character_qoutes = qoutes.data.filter(
        item => item.character_id === character.id,
      )
  
      return NextResponse.json({
        character,
        character_qoutes: character_qoutes.length > 0 ? character_qoutes : null,
      })
    } catch (error) {
      return new NextResponse('Internal Server Error', { status: 500 })
    }
  }
