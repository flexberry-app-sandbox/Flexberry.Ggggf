package Ggggf.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ggggf.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: Класс
 */
@Entity(name = "IISGgggfКласс")
@Table(schema = "public", name = "Класс")
public class Klass {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "прикол")
    private Date прикол;


    public Klass() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getприкол() {
      return прикол;
    }

    public void setприкол(Date прикол) {
      this.прикол = прикол;
    }


}