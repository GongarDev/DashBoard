import { useEffect } from 'react';

import { useDebounce } from '../../hooks/useDebounce'

import { LanguageSelector } from '../components/translator/LanguageSelector'
import { TextArea } from '../components/translator/TextArea'
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from '../../constants'
import { useStore } from '../../hooks/useStore'
import { translate } from '../../services/translate'
import { SectionType } from '../../types.d'

import { Grid, Stack, Button, IconButton } from "@mui/material"
import { CompareArrows, ContentCopy, VolumeUp } from '@mui/icons-material';


export interface State {
  fromLanguage: string,
  toLanguage: string,
  fromText: string,
  result: string,
  loading: boolean,
}

export const TranslatorPage = () => {

  const {
    loading,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useStore()

  const debouncedFromText = useDebounce(fromText, 300)

  useEffect(() => {
    if (debouncedFromText === '') return

    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('Error') })
  }, [debouncedFromText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  return (
    <Grid container>
      <Grid container spacing={2} columns={17}>
        <Grid item xs={8}>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />

            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>

        </Grid>

        <Grid item  xs={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
          <IconButton sx={{minWidth:'auto' }} disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <CompareArrows/>
          </IconButton>
        </Grid>

        <Grid item xs={8}>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <Grid style={{ position: 'relative' }}>
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
            <Grid container style={{ position: 'absolute', left: 8, bottom: 6, display: 'flex' }}>
              <IconButton
                onClick={handleClipboard}
              >
                <ContentCopy/>
              </IconButton>
              <IconButton sx={{ ml: 1 }}
                onClick={handleSpeak}
              >
                <VolumeUp/>
              </IconButton>
            </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  )
}
