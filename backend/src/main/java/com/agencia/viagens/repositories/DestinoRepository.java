package com.agencia.viagens.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agencia.viagens.entities.Destino;

@Repository
public interface DestinoRepository extends JpaRepository<Destino, Long> {

}