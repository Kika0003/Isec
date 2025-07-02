cmake_minimum_required(VERSION 3.21)
project(Hibrido C)

set(CMAKE_C_STANDARD 11)

include_directories(.)

add_executable(Hibrido
        algoritmo.c
        algoritmo.h
        funcao.c
        funcao.h
        main.c
        utils.c
        utils.h)
