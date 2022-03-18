package com.agencia.viagens.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agencia.viagens.entities.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long> {

}