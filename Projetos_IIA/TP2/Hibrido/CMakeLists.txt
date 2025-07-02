cmake_minimum_required(VERSION 3.21)
project(Hibrido C)

set(CMAKE_C_STANDARD 11)

include_directories(__MACOSX/Hibrido)
include_directories(Hibrido)

add_executable(Hibrido
        __MACOSX/Hibrido/._algoritmo.c
        __MACOSX/Hibrido/._algoritmo.h
        __MACOSX/Hibrido/._funcao.c
        __MACOSX/Hibrido/._funcao.h
        __MACOSX/Hibrido/._main.c
        __MACOSX/Hibrido/._utils.c
        __MACOSX/Hibrido/._utils.h
        Hibrido/algoritmo.c
        Hibrido/algoritmo.h
        Hibrido/funcao.c
        Hibrido/funcao.h
        Hibrido/main.c
        Hibrido/utils.c
        Hibrido/utils.h)
