#!/bin/bash

ffmpeg -i $1 -acodec pcm_s16le -ac 2 audio.wav
wav2json audio.wav --channels left right -o song.json
